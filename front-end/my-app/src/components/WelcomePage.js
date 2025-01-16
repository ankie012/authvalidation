
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const WelcomePage = () => {
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the token from localStorage
    const token = localStorage.getItem('token');
    
    // If no token, redirect to sign in
    if (!token) {
      navigate('/signIn');  // Redirect to the sign-in page if no token is available
    } else {
      // Make a request to the protected route
      axios.get('http://localhost:5000/dashboard', {
        headers: {
          'Authorization': `Bearer ${token}`,  // Attach token in Authorization header
        }
      })
      .then(response => {
        setMessage(response.data.message); // Display message from the server
      })
      .catch(error => {
        console.error('Error accessing protected route:', error);
        if (error.response && error.response.status === 403) {
          navigate('/signIn');  // Redirect if token is invalid or expired
        }
      });
    }
  }, [navigate]);

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
};

export default WelcomePage;

