import "./PostItem.css";
import { Link } from "react-router-dom";
import axios from "axios";

const PostItem = (props) => {
  const viewPostHandler = async (id) => {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    props.setPostData(res.data);
  };
  return (
    <div className="post-item">
      <div className="post-item__description">
        <Link
          className="post-item__description1"
          to="/post"
          onClick={() => viewPostHandler(props.idd)}
        >
          <div className="post-item__body">{props.title}</div>
          <div className="post-item__body1">{props.body}</div>
        </Link>
      </div>
    </div>
  );
};

export default PostItem;
