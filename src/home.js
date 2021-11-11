import React from "react";
import Posts from "./components/Posts/Posts";
import NewPost from "./components/NewPost/NewPost";
import { useState, useEffect } from "react";
import axios from "axios";
const Home = (props) => {
  const [Post, setPost] = useState([]);

  useEffect(() => {
    async function anyNameFunction() {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPost(res.data);
    }
    anyNameFunction();
  }, []);

  const saveHandler = (FillData) => {
    setPost((prev_Post) => {
      return [FillData, ...prev_Post];
    });
  };
  const setPostData = (data) => {
    props.setPostData(data);
  };
  return (
    <div>
      <NewPost onSave={saveHandler} />
      <Posts items={Post} setPostData={setPostData} />
    </div>
  );
};

export default Home;
