class UserList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="userList">
      {this.props.users.map((user, key) => {
        return <User key={key} user={user}/>
      })}
      </div>
    );
  }
}

window.UserList = UserList;