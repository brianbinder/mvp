class PostList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: ''
    }
  }

  handleTextAreaChange(event) {
    this.setState({
      body: event.target.value
    })
  }

  submitHandler(event) {
    event.preventDefault();
    console.log(this.state.body);
    console.log(this.props);
    this.props.submitPostHandler(this.state.body);
  }

  render() {
     if (this.props.createPost) {
      return (
        <form className="newPost" id="newPostForm" onSubmit={this.submitHandler.bind(this)}>
          <textarea form="newPostForm"
            name="body"
            id="postText"
            onChange={this.handleTextAreaChange.bind(this)}/><br/>
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