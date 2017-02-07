var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var db = require('../models');

passport.use('local', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
},
  function(req, email, password, done) {
    db.User.findOne({ where: {email: username}}).then(function(user) {
      if(user){
        var dbCheck = user.password;
      }
      if (!user) {
        return done(null, false, req.flash('loginMessage', 'Username is incorrect'));
      } else if (!this.validatePassword(password, dbCheck)) {
        return done(null, false, req.flash('loginMessage', 'Password is incorrect'));
      } else {
        return done(null, user);
      }
    }).catch(function(err){
      return done(err);
    });
}));


  passport.serializeUser(function(user, cb) {
    console.log("serialized: " + user.id);
    cb(null, user.id);
  });

  passport.deserializeUser(function(id, cb) {
    db.User.findOne({
      where: {
        'id': id
      }
    }).then(function(user) {
      console.log("deserialize: " + user);
      cb(null, user);
    }).catch(function(error){
      console.log(error);
    });
  });

  module.exports = passport;
