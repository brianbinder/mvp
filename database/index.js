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
  date: { type: String },
  seq: { type: Number }
});

var Post = mongoose.model('Post', PostSchema);

var savePost = (post, cb) => {
  var newPost = new Post({
    username: post.username,
    body: post.body,
    date: post.date,
    seq: post.seq
  });
  newPost.save((err) => {
    cb(err);
  });
}

var retrievePosts = (user, cb) => {
  var query = {};
  if (user) {
    query.username = user;
  }
  var sortByDate = (a, b) => {
    return b.seq - a.seq
  }

  Post.find(query, (err, posts) => {
    posts.sort(sortByDate);
    cb(posts.slice(0, 10));
  });
}

module.exports.saveUser = saveUser;
module.exports.retrieveUsers = retrieveUsers;
module.exports.savePost = savePost;
module.exports.retrievePosts = retrievePosts;