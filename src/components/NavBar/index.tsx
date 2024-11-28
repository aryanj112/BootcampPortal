// @ts-ignore
import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.png";
import classes from './NavBar.module.css';

// className={`${classes.nav} ${classes.active}`} is how you would add multiple classes

function NavBar() {
  return (
    <nav className={classes.nav}>
      <Link to="/" className={classes.logo}>
        <img src={logo} alt="logo"/>
      </Link>
      <ul>
        <li> <Link to="/calendar"> Calendar </Link> </li>
        <li> <Link to="/lectures"> Lectures </Link> </li>
        <li> <Link to="/homework"> Homework </Link> </li>
        <li> <Link to="/attendence"> Attendence </Link> </li>
        <li> <Link to="/group"> Group </Link> </li>
      </ul>
    </nav>
  )
}

export default NavBar;