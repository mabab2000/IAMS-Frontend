import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './index.css';
import Header from '../Components/homepage/Header';
function CheckEmail() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [info, setInfo] = useState('');
  const [status, setStatus] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/view_user_email', {
        params: {
          email: email
        }
      });
    
      if (!response.data.info.length === 0) {
        setError('The email address does not exist.');
      } else {
        setInfo(response.data.info);
        navigate(`/create_password?email=${email}`, { replace: true });
      }
    } catch ($e) {
        setMessage('The email address does not exist.');
      
    }
  };
  
  return (
    <div style={{position: 'relative'}}>
      <Header style={{position: 'absolute', zIndex: '-1'}} />
      <div className='loginbox'>
        <h1 className='font-bold text-2xl '>Reset your password</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Enter your Email address:<br/>
            <input
              type="email"
              placeholder='Enter your email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <p /><br/>
          </label>
          <button type="submit" className='btn-login bg-green-600'>Submit</button>
        </form>
        {message && <p style={{ color: 'red' }}>{message}</p>}
        {info && <pre style={{ color: 'red' }}>{JSON.stringify(info, null, 2)}</pre>}
        {status && <p style={{ color: 'red' }}>Status: {status}</p>}
        {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      </div>
    </div>
  );
}

export default CheckEmail;
