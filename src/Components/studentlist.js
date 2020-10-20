import React, { Component } from 'react';
import axios from 'axios';

const Student = props => (
  <tr>
    <td>{props.student.stdname}</td>
    <td>{props.student.eventname}</td>
<td>{props.student.intituteName}</td>
<td>{props.student.number}</td>
    <td>{props.student.fee
    }</td>
    <td>{props.student.date.substring(0,10)}</td>
    <td>
    <a href={"/edit/" + props.student._id} className="btn btn-info" role="button">Edit</a>  <button className="btn btn-danger" onClick={() => { props.deleteStudents(props.student._id) }}>Delete</button>
    </td>
  </tr>
)

export default class StudentList extends Component {
  constructor(props) {  
    super(props);

    this.deleteStudents = this.deleteStudents.bind(this)
    this.studentsList = this.studentsList.bind(this)

    this.state = {student: []};
  }

  componentDidMount() {
    axios.get('http://localhost:7000/student/')
      .then(response => {
        this.setState({ student: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteStudents(id) {
    axios.delete('http://localhost:7000/student/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      student: this.state.student.filter(el => el._id !== id)
    })
  }

  studentsList() {
    return this.state.student.map(currentstudent => {
      return <Student student={currentstudent} deleteStudents={this.deleteStudents} key={currentstudent._id}/>;
    })
  }

  render() {
    return (
      <div className= "table">
        <h3>Logged Students</h3>
        <table className="table-hover">
          <thead className="thead-dark">
            <tr>
              <th>Stdname</th>
              <th>Event</th>
              <th>Institute name</th>
              <th>Phone Number</th>
              <th>Fee</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.studentsList()
                      
            }
          </tbody>
        </table>
      </div>
    )
  }
}