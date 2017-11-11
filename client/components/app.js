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
  }

  fetchUsers() {
    var context = this;
    $.get('/users', function(users) {
      context.setState({
        users: users
      });
    });
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
    this.setState({
      createPost: true
    });
    console.log('the button works');
  }


  render() {
    return (
      <div className="App Container">
        <Login loginFunc={this.logIn.bind(this)}
        userLoggedIn={this.state.userLoggedIn}
        createPost={this.createPostInput.bind(this)}/>
        <h1>Simply Blogging</h1>
        <UserList users={this.state.users}/>
        <PostList createPost={this.state.createPost} posts={this.state.posts}/>
      </div>
    );
  }
}

window.App = App;