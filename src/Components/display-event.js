import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const Eventtype = props => (
    <tr>
      <td>{props.eventname.eventname}</td>
      <td>
      <button className= "btn btn-danger" onClick={() => { props.deleteEvents(props.eventname._id) }}>Delete</button>
      </td>
    </tr>
  )

  

export default class DisplayEvent extends Component {

    constructor(props){
        super(props);
        this.deleteEvents = this.deleteEvents.bind(this)
        this.state = {eventname: []} 
    
    
    }

    componentDidMount(){
        axios.get('http://localhost:7000/events/')
      .then(response => {
        this.setState({ eventname: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
    }

    deleteEvents(id){
        axios.delete('http://localhost:7000/events/'+id)
        .then(response => { console.log(response.data)});
  
      this.setState({
        eventname: this.state.eventname.filter(el => el._id !== id)
      })
    }

    eventsList() {
        return this.state.eventname.map(currentevents => {
          return <Eventtype eventname={currentevents} deleteEvents={this.deleteEvents} key={currentevents._id}/>;
        })
      }
    

    render() {
        return(

            <div>
                <h3>Event Names</h3>
        <table className="table">
          <thead className="table-hover thead-dark">
            <tr>
              <th>Eventname</th>
            </tr>
          </thead>
          <tbody>
            { this.eventsList() }
          </tbody>
        </table>
      </div>
 
        )
    }

}