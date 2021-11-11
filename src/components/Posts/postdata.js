import React from "react";
import "./postdata.css";
import { Link } from "react-router-dom";

const PostData = (props) => {
  return (
    <div>
      <Link to="/">
        <button>Go back</button>
      </Link>
      <h2>Post</h2>
      <div className="postdata-cont">
        <div className="post-item__description">
          <div className="post-item__body">{props.title}</div>
          <div className="post-item__body1">{props.body}</div>
        </div>
      </div>
      <h2>Comments</h2>

      {props.cid.map((comment) => (
        <div className="postdata-cont">
          <div className="post-item__description">
            {/* <div className="post-item__body1">{comment.postId}</div> */}
            <div className="post-item__body1">{comment.name}</div>
            <div className="post-item__body1">{comment.email}</div>
            <div className="post-item__body">{comment.body}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostData;
