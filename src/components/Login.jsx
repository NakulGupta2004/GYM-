import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Style/AuthForms.css';
import '../Style/login.css'

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
      alert('Login successful!');
      navigate('/'); // Redirect to home page after successful login
    } else {
      alert('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="input-box">
          <input 
            type="email" 
            required 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
          />
          <span>Password</span>
          <i></i>
        </div>
        <input type="submit" value="Login" />
        <div className="links">
          <Link to="/forgot-password">Forgot Password?</Link>
          <Link to="/register">Sign up</Link>
        </div>
      </form>
    </div>
  );
}