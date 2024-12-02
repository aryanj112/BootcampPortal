// @ts-ignore
import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.png";
import './NavBar.css';


// className={`${classes.nav} ${classes.active}`} is how you would add multiple classes

function NavBar() {
  return (
    <nav className="nav">
      <Link to="/" className="logo">
        <img src={logo} alt="logo"/>
      </Link>
      <ul>
        <li> <Link to="/calendar"> CALENDAR </Link> </li>
        <li> <Link to="/lectures"> LECTURES </Link> </li>
        <li> <Link to="/homework"> HOMEWORK </Link> </li>
        <li> <Link to="/attendence"> ATTENDANCE </Link> </li>
        <li> <Link to="/group"> GROUP </Link> </li>
      </ul>
    </nav>
  )
}

export default NavBar;