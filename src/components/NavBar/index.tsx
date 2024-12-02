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
        <li> <Link to="/lectures"> Lectures </Link> </li>
        <li> <Link to="/homework"> Homework </Link> </li>
        <li> <Link to="/attendence"> Attendence </Link> </li>
        <li> <Link to="/group"> Group </Link> </li>
      </ul>
      <button className = "login-button"> Login </button>
    </nav>
  )
}

export default NavBar;