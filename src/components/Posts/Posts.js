import PostItem from "./PostItem";
import "./Posts.css";

const Posts = (props) => {
  const setPostData = (postData) => {
    props.setPostData(postData);
  };
  return (
    <div className="Posts">
      <h2>All Posts</h2>
      {props.items.length === 0 ? (
        <h2 className="Posts-list__fallback">Found no Posts.</h2>
      ) : (
        props.items.map((post) => (
          <PostItem
            key={post.id}
            idd={post.id}
            title={post.title}
            body={post.body}
            setPostData={setPostData}
          />
        ))
      )}
    </div>
  );
};

export default Posts;
