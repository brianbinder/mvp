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
        return <User key={key} user={user}/>
      })}
      <form action="/submitNewUser" method="post">
        <input type="text" name="newUserName" /><input type="submit" value="Submit"/>
      </form>
      </div>
    );
  }
}

window.UserList = UserList;