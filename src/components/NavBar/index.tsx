import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.png";
import './NavBar.css';
import './LoginModel.css';
import { useGlobalName } from '../../globalContext';  // Import the custom hook

function NavBar() {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const { globalName, setGlobalName } = useGlobalName(); // Access the globalName and setGlobalName

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
        <li><a href='https://docs.google.com/spreadsheets/d/1uJUiw6YPPcxL2-qmerc_azm4oTSWo3vWJGd2ofXEPuY/edit?usp=sharing'>ATTENDENCE</a></li>
        <li><Link to="/group">GROUP</Link></li>
      </ul>
      <button onClick={handleLoginClick} className="login-button">
        LOGIN
      </button>
      {/* <div>{globalName && <span>Logged in as: {globalName}</span>}</div> */}
      {isModelOpen && <LoginModel onClose={handleCloseModel} />}
    </nav>
  );
}

interface LoginModalProps {
  onClose: () => void;
}

function LoginModel({ onClose }: LoginModalProps) {
  const { setGlobalName } = useGlobalName(); // Access the function to set global name
  const [selectedName, setSelectedName] = useState('');

  const handleOptionClick = (name: string) => {
    setGlobalName(name);  // Update the global variable
    setSelectedName(name);  // Update local state to reflect the change
    onClose();  // Close the modal
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