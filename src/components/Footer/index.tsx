// @ts-ignore
import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.png";
import './Footer.css';


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section">
      <h2>CONTACT INFORMATION</h2>
      <h3>KIMBER: martinezkimber03@gmail.com</h3>
      <h3>EVELYN: ejiang2@terpmail.umd.edu</h3>
      </div>
      <div className="footer-section">
      <h2>CLASS DETAILS</h2>
      <h3>TIME: Tues 7:00 - 8:00 PM</h3>
      <h3>LOCATION: CSI 1121</h3>
      </div>
    </footer>
  )
}

export default Footer;