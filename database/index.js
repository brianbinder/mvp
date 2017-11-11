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


module.exports.saveUser = saveUser;