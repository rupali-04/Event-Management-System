import React, { Component } from 'react';
import axios from 'axios';

export default class CreateStd extends Component {
  constructor(props) {
    super(props);

    this.onChangeStdname = this.onChangeStdname.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      stdname: ''
    }
  }

  onChangeStdname(e) {
    this.setState({
      stdname: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const std = {
      stdname: this.state.stdname
    }

    console.log(std);

    axios.post('http://localhost:7000/std/add', std)
      .then(res => console.log(res.data));

    this.setState({
      stdname: ''
    })
  }

  render() {
    return (
      <div>
        <h3>Create New Student</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Enter the New Student: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.stdname}
                onChange={this.onChangeStdname}
                />
          </div>
          <div className="form-group">
            <input type="submit" value="Create Students" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}