import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class EditExercise extends Component {
  constructor(props) {
    super(props);

    this.onChangeStdname = this.onChangeStdname.bind(this);
    this.onChangeEventName = this.onChangeEventName.bind(this);
    this.onChangeNumber = this.onChangeNumber.bind(this);
    this.onChangeFee = this.onChangeFee.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      stdname: '',
      intituteName: 'Cmpica',
      eventname: '',
      number: 0,
      fee: "Unpaid",
      date: new Date(),
      stds: [],
      events:[]
    }
  }

  componentDidMount() {
    axios.get('http://localhost:7000/student/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          stdname: response.data.stdname,
          eventname: response.data.eventname,
          number: response.data.number,
          fee: response.data.fee,
          date: new Date(response.data.date)
        })   
      })
      .catch(function (error) {
        console.log(error);
      })

    axios.get('http://localhost:7000/std/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            stds: response.data.map(std => std.stdname),
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })

      axios.get('http://localhost:7000/events/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            events: response.data.map(eventtype => eventtype.eventname),
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })
      

  }

  onChangeStdname(e) {
    this.setState({
      stdname: e.target.value
    })
  }

  onChangeEventName(e) {
    this.setState({
      eventname: e.target.value
    })
  }
onChangeNumber(e){
  this.setState({
    number: e.target.value
  })
}
  onChangeFee(e) {
    this.setState({
      fee: e.target.value
    })
  }

  onChangeDate(date) {
    this.setState({
      date: date
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const student = {
      stdname: this.state.stdname,
      intituteName: 'Cmpica',
      eventname: this.state.eventname,
      number: this.state.number,
      fee: this.state.fee,
      date: this.state.date
    }

    console.log(student);

    axios.put('http://localhost:7000/student/update/' + this.props.match.params.id, student)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
    <div>
      <h3>Edit Exercise Log</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Username: </label>
          <select ref="userInput"
              required
              className="form-control"
              value={this.state.stdname}
              onChange={this.onChangeStdname}>
              {
                this.state.stds.map(function(std) {
                  return <option 
                    key={std}
                    value={std}>{std}
                    </option>;
                })
              }
          </select>
        </div>
        <div className="form-group"> 
        <label>Event Name: </label>
          <select ref="eventInput"
              required
              className="form-control"
              value={this.state.eventname}
              onChange={this.onChangeEventName}>
              {
                this.state.events.map(function(eventn) {
                  return <option key={eventn} value={eventn}>{eventn}
                    </option>;
                })
              }
          </select>

        </div>
        <div className="form-group"> 
          <label>Contact Number: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.number}
              onChange={this.onChangeNumber}
              />
        </div>
        
        <div className="form-group">
          <label>Fee: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.duration}
              onChange={this.onChangeFee}
              />
        </div>
        <div className="form-group">
          <label>Date: </label>
          <div>
            <DatePicker
              selected={this.state.date}
              onChange={this.onChangeDate}
            />
          </div>
        </div>

        <div className="form-group">
          <input type="submit" value="Edit Student Log" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}