class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: ['Bobby', 'Jill', 'Martha']
    }
  }

  componentDidMount() {
    var context = this;
    $.get('/users', function(users) {
      context.setState({
        users: users
      });
    });
  }

  render() {
    return (
      <div className="App Container">
        <h1>Simply Blogging</h1>
        <UserList users={this.state.users}/>
      </div>
    );
  }
}

window.App = App;