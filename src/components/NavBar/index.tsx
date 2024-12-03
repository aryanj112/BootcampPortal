import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.png";
import './NavBar.css';
import './LoginModel.css';
import { useGlobalName } from '../../globalContext';  

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
        <li><Link to="/lectures">LECTURES</Link></li>
        <li><Link to="/homework">HOMEWORK</Link></li>
        <li><a href='https://docs.google.com/spreadsheets/d/1uJUiw6YPPcxL2-qmerc_azm4oTSWo3vWJGd2ofXEPuY/edit?usp=sharing'
        target="_blank" 
        rel="noopener noreferrer" >ATTENDENCE</a></li>
        <li><Link to="/group">GROUP</Link></li>
      </ul>
      <button onClick={handleLoginClick} className="login-button">
        LOGIN
      </button>
      {isModelOpen && <LoginModel onClose={handleCloseModel} />}
    </nav>
  );
}

interface LoginModalProps {
  onClose: () => void;
}

function LoginModel({ onClose }: LoginModalProps) {
  const { setGlobalName } = useGlobalName(); 
  const [selectedName, setSelectedName] = useState('');

  const handleOptionClick = (name: string) => {
    setGlobalName(name); 
    setSelectedName(name); 
    onClose(); 
    console.log('Global name set to:', name);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <h2>Select a Name</h2>
        <button onClick={() => handleOptionClick('Aryan')}>Aryan</button>
        <button onClick={() => handleOptionClick('Aditi')}>Aditi</button>
        <button onClick={() => handleOptionClick('Kimber')}>Kimber</button>
        <button onClick={() => handleOptionClick('Gavin')}>Gavin</button>
        <button className = "close"onClick={onClose}>Close</button>
        {selectedName && <p>You selected: {selectedName}</p>}
      </div>
    </div>
  );
}

export default NavBar;