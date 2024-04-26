import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import '../Styles/Navbar.css'
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';

const Navbar = () => {
  const navigate=useNavigate("");
  const [showMenu, setShowMenu] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('setisloggedin') === 'true');
    const [fix, setFix] = useState(false);
    const menuRef = useRef(null);
    const togglemenu = () => menuRef.current.classList.toggle('menu_active');
    const auth = localStorage.getItem('Token');
    const useremail = localStorage.getItem('useremail');
    const userId = localStorage.getItem('userId'); // Assuming you have userId stored in local storage

    const handleSignOut = () => {
        console.log("User Email:", useremail);
        // Send the user's email to the backend for logout
        fetch("https://backend-todoist.onrender.com/logout", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ userEmail: localStorage.getItem('useremail') }) // Include the user's email in the request body
        })
            .then(response => response.json())
            .then(data => {
                // Clear local storage and navigate to the home page
                localStorage.clear();
                setIsLoggedIn(false);
                navigate('/');
            })
            .catch(error => {
                console.error("Error:", error);
            });
    };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img src={logo} height="40" width="150" alt="Logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${showMenu ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/task" className="nav-link" id="nav-link" onClick={toggleMenu}>
                Tasks
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link" onClick={toggleMenu}>
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/calendar" className="nav-link" onClick={toggleMenu}>
                Calendar
              </Link>
            </li>
            
              <li className="nav-item">
               {isLoggedIn ? (
                                    <>
                                        <button onClick={handleSignOut}> LOGOUT </button>
                                    </>
                                ) : (
                                  <Link to="/register" className="nav-link" onClick={toggleMenu}>
                                  Signup
                                </Link>
                                )}
              </li>
            
            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
