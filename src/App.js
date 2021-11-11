import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./home";
import PostData from "./components/Posts/postdata";
import { useState } from "react";
import axios from "axios";

const App = () => {
  const [TitlePostData, setTitlePostData] = useState("");
  const [BodyState, setBodyState] = useState("");
  const [CommData, setCommData] = useState([]);

  const transferData = async (data) => {
    setTitlePostData(data.title);
    setBodyState(data.body);
    const comm = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${data.id}/comments`
    );
    setCommData(comm.data);
  };
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home setPostData={transferData} />} />
          <Route
            exact
            path="/post"
            element={
              <PostData title={TitlePostData} body={BodyState} cid={CommData} />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
