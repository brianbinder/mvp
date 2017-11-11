function Post(props) {
  return (
    <div className="post">
      <p className="postBody">{props.post.body}</p>
      <div className="postHeading">Authored by {props.post.username} on {props.post.date}</div>
    </div>
  );
}

window.Post = Post;