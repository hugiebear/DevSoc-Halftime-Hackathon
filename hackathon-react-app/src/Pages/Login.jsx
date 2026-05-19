import React, { useState } from 'react';
import styles from '../Styles/Login.module.css';
import { Link } from 'react-router-dom';

function Login({ successCallback }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const login = async () => {
    successCallback();
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