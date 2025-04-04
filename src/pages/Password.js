import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Password = () => {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await fetch('https://self-intro-webpage.onrender.com', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ password }),
          });
          const data = await response.json();
          if (data.success) {
            localStorage.setItem('isAuthenticated', 'true');
            navigate('/');
          } else {
            setError(data.message || 'Incorrect password');
          }
        } catch (err) {
          setError('An error occurred. Please try again.');
        }
      };
      

    return (
        <div id='password-main'>
            <h1>Enter Password</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />
                <button type="submit">Submit</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default Password;
