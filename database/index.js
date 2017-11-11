var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/blog');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: { type: String, unique: true },
  password: { type: String }
});

var User = mongoose.model('User', UserSchema);

var saveUser = (username, password, cb) => {
  var newUser = new User({
    username: username,
    password: password
  });
  newUser.save((err) => {
    cb(err);
  })
}

var retrieveUsers = (cb) => {
  User.find({}, (err, users) => {
    if (err) {
      console.log(err);
    } else {
      users = users.map((user) => {
        return user.username;
      });
      cb(users);
    }
  });
}

var PostSchema = new Schema({
  username: { type: String },
  body: { type: String },
  date: { type: Date }
});

var Post = mongoose.model('Post', PostSchema);

var savePost = (post) => {

}

var retrievePosts = (cb) => {

}

module.exports.saveUser = saveUser;
module.exports.retrieveUsers = retrieveUsers;
module.exports.savePost = savePost;
module.exports.retrievePosts = retrievePosts;