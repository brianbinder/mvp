class PostList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
     if (this.props.createPost) {
      return (
        <form className="newPost">
          <input type="text" name="body" id="postText" /><br/>
          <input type="submit" value="Submit Post" />
        </form>
      );
    } else {
      return (
        <div className="postList">
          {this.props.posts.map((post, key) => {
            return <Post key={key} post={post}/>
          })}
        </div>
      );
    }
  }
}

window.PostList = PostList;