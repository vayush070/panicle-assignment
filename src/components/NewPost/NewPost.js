import "./NewPost.css";
import PostForm from "./PostForm";
import { useState } from "react";
import axios from "axios";

const NewPost = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const saveDataHandler = async (enteredPostData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    console.log(enteredPostData);
    const ress = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      enteredPostData,
      config
    );
    const postData = {
      ...enteredPostData,
      id: Math.random().toString(),
    };
    props.onSave(postData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-post">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Post</button>
      )}
      {isEditing && (
        <PostForm onSaveData={saveDataHandler} onCancel={stopEditingHandler} />
      )}
    </div>
  );
};

export default NewPost;
