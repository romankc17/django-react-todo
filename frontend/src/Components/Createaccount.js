import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import "./Createaccount.css";

function Createaccount() {
  return (
    <div className="createaccount">
      <Link to="/">
        <img
          className="createaccount__logo"
          src="https://s3.amazonaws.com/designimo/logos/thumb/1774091-7415.png"
        />
      </Link>
      <div className="createaccount__container">
        <h1>Create Account</h1>
        <form>
          <h5>E-mail</h5>
          <input type="text" placeholder="E-mail" />
          <h5>Password</h5>
          <input type="password" placeholder="Password" />
          <h5>Repeat Password</h5>
          <input type="password" placeholder="Repeat Password" />
          <Button size="medium" className="createaccount__button">
            Create Account
          </Button>
        </form>
        <div className="createaccount__login">
          <p className="createaccount__text">Already have an account?</p>
          <Link to="/login">
            <Button size="medium" className="createaccount__logbutton">
              Go to Login
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Createaccount;
