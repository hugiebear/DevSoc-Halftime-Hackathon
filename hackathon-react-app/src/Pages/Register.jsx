import React, { useState } from "react";
import styles from "../Styles/Login.module.css";
import { Link } from "react-router-dom";

function Register({ successCallback }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");

  const register = () => {
    successCallback();
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
