function User(props) {
  return (
    <div className="User">
      <a href="#">{props.user}</a>
    </div>
  );
}

window.User = User;