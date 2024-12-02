import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.png";
import './NavBar.css';
import './LoginModule.css';
import { setGlobalName, getGlobalName } from '../../globalState';  // Import functions from the global state

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
        <li> <Link to="/lectures">Lectures</Link> </li>
        <li> <Link to="/homework">Homework</Link> </li>
        <li> <Link to="/attendance">Attendance</Link> </li>
        <li> <Link to="/group">Group</Link> </li>
      </ul>
      <button onClick={handleLoginClick} className="login-button">Login</button>
      {isModelOpen && <LoginModel onClose={handleCloseModel} />}
    </nav>
  );
}

interface LoginModalProps {
  onClose: () => void;
}

function LoginModel({ onClose }: LoginModalProps) {

  const [selectedName, setSelectedName] = useState('');

  const handleOptionClick = (name: string) => {
    setGlobalName(name);  // Update the global variable
    setSelectedName(name);  // Update local state to reflect the change
    onClose();  // Close the modal
    console.log('Global name set to:', getGlobalName());  // Use getGlobalName to fetch the updated value
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <h2>Select a Name</h2>
        <button onClick={() => handleOptionClick('Aryan')}>Aryan</button>
        <button onClick={() => handleOptionClick('Aditi')}>Aditi</button>
        <button onClick={() => handleOptionClick('Kimber')}>Kimber</button>
        <button onClick={() => handleOptionClick('Gavin')}>Gavin</button>
        <button onClick={onClose}>Close</button>
        {selectedName && <p>You selected: {selectedName}</p>}
      </div>
    </div>
  );
}

export default NavBar;