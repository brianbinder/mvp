class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      actionText: 'Create new post'
    };

  }

  handleUserChange(event) {
    this.setState({
      username: event.target.value
    });
  }

  handlePassChange(event) {
    this.setState({
      password: event.target.value
    });
  }

  submitHandler(event) {
    this.props.loginFunc(this.state.username, this.state.password);
    event.preventDefault();
  }

  render() {
    if (this.props.userLoggedIn) {
      var actionText = '';
      if (this.props.createPost) {
        actionText = 'View posts';
      } else {
        actionText = 'Create new post';
      }
      return (
        <div className="login">
          <div className="loggedInUser">Logged in as {this.props.userLoggedIn}</div>
          <button id="jokerBtn" onClick={this.props.createPostInput}>{actionText}</button>
          <button onClick={this.props.logOut}>Logout</button>
        </div>
      );
    } else {
      return (
        <form onSubmit={this.submitHandler.bind(this)} className="login" >
          User: <input type="text" name="newUsername" onChange={this.handleUserChange.bind(this)}/>
          Password: <input type="text" name="newPassword" onChange={this.handlePassChange.bind(this)}/>
          <input type="submit" value="Login"/>
        </form>
      );
    }
  }
}



window.Login = Login;