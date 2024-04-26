import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function EmailVerificationPage() {
  const { token, email } = useParams();
  const [loading, setLoading] = useState(true);
  const [verificationMessage, setVerificationMessage] = useState('');

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const response = await axios.get(`https://backend-todoist.onrender.com/verify?token=${token}&email=${email}`);
        console.log(response.data); // Handle response from backend
        setVerificationMessage('Email verified successfully. Redirecting to login page...');
        // Simulate redirect after 3 seconds
        setTimeout(() => {
          // Redirect user to login page
          window.location.replace('/login');
        }, 5000);
      } catch (error) {
        console.error('Error verifying email:', error);
        setVerificationMessage('Error verifying email. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    verifyEmail();
  }, [token, email]);

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="text-center mb-4">
            <h2>Email Verification</h2>
          </div>
          
          <div className="mt-3 text-center">
            {loading ? <p>Verifying email...</p> : <p>{verificationMessage}</p>}
          </div>
          <br />
          <br />
         
        </div>
      </div>
    </div>
  );
}

export default EmailVerificationPage;
