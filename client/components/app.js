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


  fetchUsers() {
    var context = this;
    $.get('/users', function(users) {
      context.setState({
        users: users
      });
    });
  }

  fetchPosts(username) {
    var context = this;
    var path = '/posts';
    if (username) {
      path += '/' + username;
    }
    $.get(path, function(posts) {
      context.setState({
        posts: posts
      });
    });
  }

  // filterPosts(username) {
  //   console.log(username);
  // }

  logIn(user, password) {
    var context = this;
    var data = {
      username: user,
      password: password
    };
    $.post('/submitLogin', data, function(response) {
      if (response) {
        context.setState({
          userLoggedIn: user
        });
      }
    });
  }

  logOut() {
    var context = this;
    $.post('/logOut', function(response) {
      context.setState({
        userLoggedIn: null,
        createPost: false
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
      context.fetchUsers();
      context.fetchPosts();
    });
  }

  componentDidMount() {
    this.fetchUsers();
    this.fetchPosts();
  }

  render() {
    return (
      <div className="App Container">
        <Login
        loginFunc={this.logIn.bind(this)}
        logOut={this.logOut.bind(this)}
        userLoggedIn={this.state.userLoggedIn}
        createPost={this.state.createPost}
        createPostInput={this.createPostInput.bind(this)}
         />
        <h1>Simply Blogging</h1>
        <UserList users={this.state.users}
        fetchPosts={this.fetchPosts.bind(this)}/>
        <div className="horizontalLine" ></div>
        <PostList createPost={this.state.createPost} posts={this.state.posts}
        submitPostHandler={this.submitPostHandler.bind(this)} />
      </div>
    );
  }
}

window.App = App;