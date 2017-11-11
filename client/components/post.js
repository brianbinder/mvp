function Post(props) {
  return (
    <div className="post">
      <div className="postHeading">Authored by {props.post.username} on {props.post.date}</div>
      <p>{props.post.body}</p>
    </div>
  );
}

window.Post = Post;