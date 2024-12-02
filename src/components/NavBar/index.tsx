import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.png";
import './NavBar.css';
import './LoginModel.css';

function NavBar() {

  const [isModelOpen, setIsModelOpen] = useState(false);
  const handleLoginClick = () => setIsModelOpen(true);
  const handleCloseModel = () => setIsModelOpen(false);

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
      <button onClick = {handleLoginClick} className = "login-button"> Login </button>
      {isModelOpen && <LoginModel onClose = {handleCloseModel}/>}
    </nav>
  )
}

interface LoginModalProps {
  onClose: () => void;
}

function LoginModel({ onClose }: LoginModalProps){
  
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, password }); // Replace this with a save action (e.g., API call)
    localStorage.setItem('user', JSON.stringify({ name, password }));
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <button onClick={onClose} className="close-button">X</button>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <label>
            Password:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}


export default NavBar;