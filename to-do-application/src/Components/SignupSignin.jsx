import React, { useState } from 'react';
import img from '../images/sign.png'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import DesignedAlert from './DesignedAlert';
import Navbar from './Navbar';

const Register = () => {
    const [value, setValue] = useState({
        name: "",
        email: "",
        password: "",
        cpassword: "",
    });

    const navigate = useNavigate();
    const [alert, setAlert] = useState({ message: "", type: "" });

    const handleChange = (e) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, password, cpassword } = value;

        if (name && email && password && (password === cpassword)) {
            try {
                const registerData = { name, email, password, cpassword };
                const registerResponse = await axios.post("https://backend-todoist.onrender.com/register", registerData);
                if (registerResponse.data.message === "Registration successful") {
                    setAlert({ message: registerResponse.data.message, type: 'success' });
                    setValue({
                        name: "",
                        email: "",
                        password: "",
                        cpassword: "",
                    });
                    navigate('/login'); // Redirect to /task on successful registration
                } else {
                    setAlert({ message: "Registration failed. Please try again.", type: 'error' });
                }
            } catch (error) {
                console.error(error);
                setAlert({ message: "Registration failed. Please try again.", type: 'error' });
            }
        } else {
            setAlert({ message: "Please provide the information properly.", type: 'warning' });
        }
    };

    return (
        <div className="container-fluid">
            <Navbar />
            <div className="row mt-1">
                <div className="col-md-6">
                    <div className="image-cont">
                        <h1 id="welcome">Welcome to TaskPlan</h1>
                        <p>We are glad to know that you choose us to organize and schedule your task</p>
                        <img src={img} alt="Registration Image" className="img-fluid" haight="60px" />
                        <a href="/">Go Back to Homepage</a>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-cont">
                        <h2 id="signup">Sign up</h2>
                        <form className='formsss'>
                            <input type="text" autoComplete='off' name="name" value={value.name} onChange={handleChange} className='form-control mb-3' placeholder='Name' />
                            <input type="text" autoComplete='off' name="email" value={value.email} onChange={handleChange} className='form-control mb-3' placeholder='Email' />
                            <input type="password" autoComplete='off' name="password" value={value.password} onChange={handleChange} className='form-control mb-3' placeholder='Password' />
                            <input type="password" autoComplete='off' name="cpassword" value={value.cpassword} onChange={handleChange} className='form-control mb-3' placeholder='Confirm Password' />
                            <button onClick={handleSubmit} className="btn btn-primary mb-3">Register</button>
                            <p>Already a registered user? <a href="/login">Login</a></p>
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

export default Register;
