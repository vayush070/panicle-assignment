import { useState } from "react";
import "./PostForm.css";

const PostForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [EnteredBody, setEnteredBody] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const BodyChangeHandler = (event) => {
    setEnteredBody(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const postData = {
      title: enteredTitle,
      body: EnteredBody,
      userId: 1,
      id: Math.random(),
    };

    props.onSaveData(postData);
    setEnteredBody("");
    setEnteredTitle("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-post__controls">
        <div className="new-post__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
            placeholder="Enter your post title"
          />
        </div>
        <div className="new-post__control">
          <label>Body</label>
          <input
            type="text"
            value={EnteredBody}
            placeholder="Write something about your post"
            onChange={BodyChangeHandler}
          />
        </div>
      </div>
      <div className="new-post__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Post</button>
      </div>
    </form>
  );
};

export default PostForm;
