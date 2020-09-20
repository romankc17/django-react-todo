import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import "./Home.css";

function Header() {
  return (
    <nav className="home">
      <Link to="/">
        <img
          className="home__logo"
          src="https://s3.amazonaws.com/designimo/logos/thumb/1774091-7415.png"
        />
      </Link>
      <div className="home__container">
        <h1>TODO APP</h1>
        <div className="home__paragraph">
          <p>
            TODO is an Web App where you can create your own TODO list for your
            remaining tasks and delete it after it's complition.
          </p>
          {/*<div className="home__buttonlogin">
            <Link to="/login">
              <Button size="medium" className="home__login">
                Login
              </Button>
            </Link>
          </div>
          <div className="home__buttoncreateaccount">
            <Link to="/createaccount">
              <Button size="medium" className="home__createaccount">
                Create Account
              </Button>
            </Link>
          </div>*/}
        </div>
      </div>
    </nav>
  );
}

export default Header;
