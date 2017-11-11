class PostList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="postList">
        {this.props.posts.map((post, key) => {
          return <Post key={key} post={post}/>
        })}
      </div>
    );
  }

}

window.PostList = PostList;