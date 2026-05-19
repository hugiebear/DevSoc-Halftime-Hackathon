import axios from 'axios';
import React, { useState } from "react";
import styles from "../Styles/Login.module.css";
import { Link } from "react-router-dom";

function Register({ successCallback }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
	const [error, setError] = useState('');

  const register = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) { 
      setError('Passwords must match');
			alert("pw error")
      return;
    }
		console.log("hello")
    try {
			console.log("trying to connect")
      const response = await axios.post("http://localhost:5000/auth/register", {
        email,
        password,
        name,
      });
      const token = response.data.token;
      successCallback(token);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.error || "Failed to register");
      } else {
        setError("Failed to register");
      }
			alert("Failed to register");
    }
  };

  return (
    <div className={styles.root}>
      <form className={styles.form} onSubmit={register}>
        <h1>Sign Up</h1>
        <label htmlFor="register-name">Name</label>
        <input
          id="register-name"
          className={styles.input}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="register-email">Email</label>
        <input
          id="register-email"
          className={styles.input}
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="register-password">Password</label>
        <input
          id="register-password"
          className={styles.input}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <label htmlFor="register-confirm-password">Confirm Password</label>
        <input
          id="register-confirm-password"
          className={styles.input}
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <button className={styles.button} type="submit" name="RegisterSubmit">
          Register
        </button>

        <div className={styles.linkRow}>
          <span>Already have an account?</span>
          <nav>
						&nbsp;
            <Link to="/login"> Login</Link>
          </nav>
        </div>
      </form>
    </div>
  );
}

export default Register;
