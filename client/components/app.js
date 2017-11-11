class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: ['Bobby', 'Jill', 'Martha'],
      userLoggedIn: null,
      createPost: false,
      posts: [{
        username: 'Bobby',
        body: 'Beautiful day!',
        date: new Date().toLocaleTimeString()
      }, {
        username: 'Jill',
        body: 'Taking a walk!',
        date: new Date().toLocaleTimeString()
      }, {
        username: 'Martha',
        body: 'Admiring the view on this wonderful morning.',
        date: new Date().toLocaleTimeString()
      }]
    };
  }

  componentDidMount() {
    this.fetchUsers();
    this.fetchPosts();
  }

  fetchUsers() {
    var context = this;
    $.get('/users', function(users) {
      context.setState({
        users: users
      });
    });
  }

  fetchPosts() {
    var context = this;
    $.get('/posts', function(posts) {
      context.setState({
        posts: posts
      });
    })
  }

  logIn(user, password) {
    var context = this;
    var data = {
      username: user,
      password: password
    };
    $.post('/submitNewUser', data, function(response) {
      context.setState({
        userLoggedIn: user
      });
    })
  }

  createPostInput() {
    var state = this.state.createPost;
    state = !state;
    this.setState({
      createPost: state
    });
  }

  submitPostHandler(body) {
    var context = this;
    var blogPost = {
      body: body,
      username: this.state.userLoggedIn,
      date: new Date().toLocaleDateString('en-US'),
      seq: new Date().getTime()
    };
    $.post('/submitNewPost', blogPost, function(response) {
      context.setState({
        createPost: false
      });
    });
  }


  render() {
    return (
      <div className="App Container">
        <Login loginFunc={this.logIn.bind(this)}
        userLoggedIn={this.state.userLoggedIn}
        createPost={this.state.createPost}
        createPostInput={this.createPostInput.bind(this)}
         />
        <h1>Simply Blogging</h1>
        <UserList users={this.state.users}/>
        <PostList createPost={this.state.createPost} posts={this.state.posts}
        submitPostHandler={this.submitPostHandler.bind(this)} />
      </div>
    );
  }
}

window.App = App;