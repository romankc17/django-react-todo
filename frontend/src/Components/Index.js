import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import "./Index.css";

function Index() {
  return (
    <nav className="index">
      <Link to="/">
        <img
          className="index__logo"
          src="https://s3.amazonaws.com/designimo/logos/thumb/1774091-7415.png"
        />
      </Link>
      <div calssName="index__container">
        <h1>TODO APP</h1>
        <div className="index__post">
          <input type="text" className="index__input" />
          <Button size="medium">ADD</Button>
        </div>
      </div>
    </nav>
  );
}

export default Index;
