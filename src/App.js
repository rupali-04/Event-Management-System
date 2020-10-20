import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom"
//import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from "./Components/navbar"
import StudentList from "./Components/studentlist"
import EditStudent from "./Components/edit-student"
import CreateStudent from "./Components/create-student"
import CreateStd from "./Components/create-std"
import CreateEvent from "./Components/create-event"
import DisplayEvent from "./Components/display-event"

function App() {
  return (
   <Router>
     <Navbar />
     <br/>
     <Route path="/" exact component= {StudentList}/>
     <Route path="/edit/:id" exact component= {EditStudent}/>
     <Route path="/create" exact component= {CreateStudent}/>
     <Route path="/std" exact component= {CreateStd}/> 
     <Route path="/eventadd" exact component = {CreateEvent}/>
     <Route path="/eventdisplay" exact component = {DisplayEvent}/>
     </Router>
  );
}

export default App;
