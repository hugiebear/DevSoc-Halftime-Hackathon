import React, { useState } from 'react';
import styles from '../Styles/Login.module.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Login({ successCallback }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const login = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.post("http://localhost:5000/auth/login", {
        email,
        password,
      });
      const token = response.data.token;
      successCallback(token);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.error || "Failed to Login");
      } else {
        setError("Failed to Login");
      }
      alert("error");
    }
  };

  return (
    <div className={styles.root}>
      <form className={styles.form} onSubmit={login}>
        <h1>Login</h1>
        <label htmlFor="login-email">Email</label>
        <input
          id="login-email"
          className={styles.input}
          type="text"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <label htmlFor="login-password">Password</label>
        <input
          id="login-password"
          className={styles.input}
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <button name={"loginSubmit"} className={styles.button} type="submit">Login</button>

        <div className={styles.linkRow}>
          <span>Don't have an account?</span>
          <nav>
						&nbsp;
            <Link to="/register"> Sign Up</Link>
          </nav>
        </div>
      </form>

    </div>
  );
}

export default Login;