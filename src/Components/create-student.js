import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class CreateStudent extends Component {
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
    axios.get('http://localhost:7000/std/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            stds: response.data.map(std => std.stdname),
            
            stdname: response.data[0].stdname
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
            events: response.data.map(event => event.eventname),
            eventname: response.data[0].eventname
          })
          console.log(this.state.events)
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

  onChangeNumber(e) {
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
      intituteName: this.state.intituteName,
      eventname: this.state.eventname,
      number: this.state.number,
      fee: this.state.fee,
      date: this.state.date
    }

    console.log(student);

    axios.post('http://localhost:7000/student/add', student)
      .then(res => console.log(res.data))
      .catch((error) => {
        console.log(error);
      })
   
    window.location = '/';
  }

  render() {
    return (
    <div>
      <h3>Create New Student Log</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Student name: </label>
          <select 
              required
              className="form-control"
              value={this.state.stdname}
              onChange={this.onChangeStdname}>
              {
                this.state.stds.map(function(stds) {
                  return <option 
                    key={stds}
                    value={stds}>{stds}
                    </option>;
                })
              }
          </select>
        </div>
        <div className="form-group"> 
        <label>Event name: </label>
          <select
              required
              className="form-control"
              value={this.state.eventname}
              onChange={this.onChangeEventName}>
              {
                this.state.events.map(function(events) {
                  return <option key={events} value={events}>
                      {events}
                    </option>;
                })

              }
          </select>
        </div>
        <div className="form-group">
          <label>Contact Number: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.number}
              onChange={this.onChangeNumber}
              />
        </div>
        <div className="form-group">
          <label>Fee Status: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.fee}
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
          <input type="submit" value="Create Student Log" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}
