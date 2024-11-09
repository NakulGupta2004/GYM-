import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../Style/login.css';

export default function Component({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      onLogin(user);
      navigate('/');
    }
  }, [onLogin, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (email && password) {
      const storedUser = JSON.parse(localStorage.getItem('users')) || {};
      if (storedUser[email] && storedUser[email].password === password) {
        const userData = { email };
        onLogin(userData);
        navigate('/');
      } else {
        setError('Invalid email or password. Please try again.');
      }
    } else {
      setError('Please enter both email and password');
    }
  };

  return (
    <div className="page-container">
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Login</h2>
          {error && (
            <div className="error-message" role="alert">
              {error}
            </div>
          )}
          <div className="input-box">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="Email"
            />
            <span>Email</span>
            <i></i>
          </div>
          <div className="input-box">
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              aria-label="Password"
            />
            <span>Password</span>
            <i></i>
          </div>
          <div className="links">
            <a href="#" onClick={(e) => { e.preventDefault(); alert('Password reset functionality not implemented yet.'); }}>Forgot Password</a>
            <a href="/register">Signup</a>
          </div>
          <input type="submit" value="Login" />
        </form>
      </div>
    </div>
  );
}