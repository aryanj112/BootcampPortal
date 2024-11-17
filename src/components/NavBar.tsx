// @ts-ignore
import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav className = 'nav'>
      <Link to="/" className = "site-title"> AppDev Educational Portal </Link>
      <ul>
        <li> <Link to="/calendar"> Calendar </Link> </li>
        <li> <Link to="/lectures"> Lectures </Link> </li>
      </ul>

    </nav>
  )
}

export default NavBar
