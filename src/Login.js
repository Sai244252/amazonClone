import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Login.css";
import { auth } from "./firebase";

const Login = (props) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const signIn = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => navigate("/"))
      .catch((err) => alert(err.message));
  };

  const register = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email, password).then((auth) => {
      //   const data = auth.json();
      console.log(auth);
      if (auth) {
        navigate("/");
      }
    });
  };

  return (
    <div className="login">
      <NavLink to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="logo"
        />
      </NavLink>
      <div className="login__container">
        <h1 style={{ fontSize: "28px", fontFamily: "sans-serif" }}>Sign-In</h1>
        <form action="">
          <h5 style={{ fontSize: "13px", fontFamily: "sans-serif" }}>
            Email or mobile phone number
          </h5>
          <input
            required
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <h5>Password</h5>
          <input
            required
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          <button
            type="submit"
            onClick={signIn}
            className="login__signInButton"
          >
            Sign-In
          </button>
        </form>

        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
      </div>

      <br />
      <small>New to Amazon?</small>
      <button onClick={register} className="login__registerButton">
        Create your Amazon Account
      </button>
    </div>
  );
};

export default Login;
