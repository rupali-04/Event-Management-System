import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Student_Record</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Students</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link">Create Student Detail</Link>
          </li>
          <li className="navbar-item">
          <Link to="/std" className="nav-link">Add Student</Link>
          </li>
          <li className="navbar-item">
            <Link to="/eventadd" className="nav-link">Add Event</Link>
          </li>
          <li className="navbar-item">
            <Link to="/eventdisplay" className="nav-link">Display Events</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}
