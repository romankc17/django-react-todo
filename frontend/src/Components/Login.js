import React from "react";
import { Button } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";

function Login() {
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://s3.amazonaws.com/designimo/logos/thumb/1774091-7415.png"
        />
      </Link>
      <div className="login__container">
        <h1>Log In</h1>
        <form>
          <h5>E-mail</h5>
          <input type="text" placeholder="E-mail" />
          <h5>Password</h5>
          <input type="password" placeholder="Password" />
          <Button size="medium">Login</Button>
        </form>
        <Link to="/createaccount">
          <Button size="medium">Create Account</Button>
        </Link>
      </div>
    </div>
  );
}

export default Login;
