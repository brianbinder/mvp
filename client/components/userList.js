class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newUser: ''
    };
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
      </div>
    );
  }
}

window.UserList = UserList;