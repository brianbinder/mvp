class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
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
      return (
        <div className="loggedInUser">Logged in as {this.props.userLoggedIn}</div>
      );
    } else {
      return (
        <form onSubmit={this.submitHandler.bind(this)} className="login" action="/submitNewUser" method="post">
          User: <input type="text" name="newUsername" onChange={this.handleUserChange.bind(this)}/>
          Password: <input type="text" name="newPassword" onChange={this.handlePassChange.bind(this)}/>
          <input type="submit" value="Login"/>
        </form>
      );
    }
  }
}



window.Login = Login;