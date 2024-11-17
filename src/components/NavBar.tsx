// @ts-ignore

import React from 'react'

function NavBar() {
  return (
    <nav className = 'nav'>
      <a href="/" className = "site-title"> AppDev Educational Portal </a>
      <ul>
        <li> <a href="/calendar"> Calendar </a> </li>
        <li> <a href="/lectures"> Lectures </a> </li>
      </ul>

    </nav>
  )
}

export default NavBar
