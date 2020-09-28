import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import "./Index.css";
import axios from "axios";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import DoneOutlineIcon from "@material-ui/icons/DoneOutline";

function Index() {
  const [post, setPost] = useState([]);
  const [add, setAdd] = useState("");
  const [ref, setRef] = useState(1);

  function deleteData(postid) {
    axios
      .delete(`http://127.0.0.1:8000/apis/${postid}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    axios({
      method: "get",
      url: "http://127.0.0.1:8000/apis/?format=json",
    })
      .then((res) => {
        console.log(res.data);
        setPost(res.data);
      })
      .catch((err) => console.log(err));
  }, [ref]);

  function refresh() {
    setTimeout(() => {
      setRef(ref + 1);
    }, 500);
    setAdd("");
  }

  function addlist() {
    axios
      .post("http://127.0.0.1:8000/apis/", {
        title: add,
        completed: false,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  return (
    <nav className="index">
      {/*<Link to="/">
        <img
          className="index__logo"
          src="https://s3.amazonaws.com/designimo/logos/thumb/1774091-7415.png"
        />
  </Link>*/}
      <div calssName="index__container">
        <h1>TODO APP</h1>
        <form className="index__post">
          <input
            type="text"
            className="index__input"
            value={add}
            onChange={(e) => setAdd(e.target.value)}
          />
          <Button
            size="medium"
            className="index__button"
            onClick={() => {
              addlist();
              refresh();
            }}
          >
            ADD
          </Button>
          <div className="index__list">
            <ul>
              {post.map((post) => (
                <li key={post.id} className="index__item">
                  <div className="index__postlist">{post.title} </div>
                  <div className="index__postbuttons">
                    <DoneOutlineIcon className="index__done" />{" "}
                    <DeleteOutlineIcon
                      className="index__delete"
                      onClick={() => {
                        deleteData(post.id);
                        refresh();
                      }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </form>
      </div>
    </nav>
  );
}

export default Index;
