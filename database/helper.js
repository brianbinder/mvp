var bcrypt = require('bcrypt');
var db = require('../database/index.js');


var logInOrCreateUser = (username, password, cb) => {
  db.retrieveUsers(username, (err, user) => {
    if (user.length === 0) {
      generatePassHash(password, (err, passHash) => {
        db.saveUser(username, passHash, (err) => {
          cb(true);
        })
      });
    } else {
      user = user[0];
      bcrypt.compare(password, user.password, (err, match) => {
        cb(match);
      });
    }
  });
}

var generatePassHash = (password, cb) => {
  bcrypt.genSalt(2, (err, salt) => {
    bcrypt.hash(password, salt,(err, passHash) => {
      cb(err, passHash);
    });
  })
}


module.exports.logInOrCreateUser = logInOrCreateUser;