import React, {Component} from "react"
import axios from 'axios'


export default class CreateEvent extends Component {
constructor(props){
    super(props);

    this.onChangeEventName = this.onChangeEventName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
this.state = {
    eventname: ''
}
}   
onChangeEventName(e){
    this.setState({
       eventname: e.target.value
    })
}
onSubmit(e){
e.preventDefault();

const eventtypes = {
    eventname: this.state.eventname
  }

  axios.post('http://localhost:7000/events/add' , eventtypes)
  .then(res => console.log(res.data))

  this.setState({
    eventname: ''
  })

}
render(){
    return( <div>
        <h3>Create New Event</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Enter the New Event Name: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.eventname}
                onChange={this.onChangeEventName}
                />
          </div>
          <div className="form-group">
            <input type="submit" value="Create Events" className="btn btn-primary" />
          </div>
        </form>
      </div>
 
    )
}
}



