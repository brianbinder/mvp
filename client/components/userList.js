class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newUser: ''
    };
  }

  handleClick(event) {
    event.preventDefault();
    this.props.fetchPosts();
  }


  render() {
    return (
      <div className="userList">
        {this.props.users.map((user, key) => {
          return (
            <span key={key}>
              <User fetchPosts={this.props.fetchPosts}
                user={user}/>
            </span>
          );
        })}
        <a className="User" href="" onClick={this.handleClick.bind(this)}>Most Recent</a>
      </div>
    );
  }
}

window.UserList = UserList;