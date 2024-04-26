import React, { useState } from 'react';
import img from "../images/sign.png";
import axios from "axios";
import '../Styles/Login.css'
import { useNavigate } from 'react-router-dom';
import DesignedAlert from './DesignedAlert'; // Import the DesignedAlert component
import Navbar from './Navbar';

const Login = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState({
    email: "",
    password: "",
  });

  const [alert, setAlert] = useState({ message: "", type: "" });

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const login = async (e) => {
    e.preventDefault();
    const { email, password } = value;
    if (email && password) {
      try {
        const response = await axios.post("https://backend-todoist.onrender.com/login", value);
        setAlert({ message: response.data.message, type: 'success' });
        setValue({
          email: "",
          password: "",
        });
        if (response.data.code === 400) {
          localStorage.setItem('token', 'head');
          localStorage.setItem('setisloggedin', 'true');
          localStorage.setItem('username', response.data.username);
          localStorage.setItem('useremail', response.data.useremail);
          navigate('/task');
        } else if (response.data.code === 408) {
          localStorage.setItem('token', 'admin');
          localStorage.setItem('setisloggedin', 'true');
          localStorage.setItem('isadmin', 'true');
          navigate('/admindashboard');
        }
      } catch (error) {
        setAlert({ message: "Login failed. Please try again.", type: 'error' });
      }
    } else {
      setAlert({ message: "Please provide the information properly.", type: 'warning' });
    }
  };

  return (
    <div className="container-fluid">
        <Navbar />
      <div className="row mt-4">
        <div className="col-md-6 offset-md-3">
          <div className="image-cont text-center">
            <h1 id="welcome">Welcome to TaskPlan</h1>
            <p>We are glad to know that you choose us to  plan and organize yor tasks</p>
            
          </div>

          <div className="form-cont">
            <h2 id="signup" className="text-center mb-4">Sign in</h2>
            <form className='formsss'>
              <div className="mb-3">
                <input type="email" autoComplete='off' name="email" value={value.email} onChange={handleChange} className='form-control' placeholder='Email' />
              </div>
              <div className="mb-3">
                <input type="password" autoComplete='off' name="password" value={value.password} onChange={handleChange} className='form-control' placeholder='Password' />
              </div>
              <div className="d-grid gap-2">
                <button onClick={login} className="btn btn-primary">Sign in</button>
              </div>
              <br />
              <p className="text-center">New to TaskPlan? <a href="/signup">Sign up</a></p>
            </form>
          </div>
        </div>
      </div>
      <DesignedAlert
        message={alert.message}
        type={alert.type}
        onClose={() => setAlert({ message: "", type: "" })}
      />
    </div>
  );
}

export default Login;
