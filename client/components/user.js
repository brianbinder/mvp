class User extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick(event) {
    event.preventDefault();
    this.props.fetchPosts(this.props.user);
  }

  render() {
    return (

      <a className="User" href="#"
        onClick={this.handleClick.bind(this)}>
          {this.props.user}
      </a>
    );
  }
}

window.User = User;