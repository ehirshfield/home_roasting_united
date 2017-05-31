// Dependencies
// =============================================================
var db = require('../models');
var express = require('express');
var router = express.Router();
var passport = require('passport');

// Routes
// =============================================================


  // Each of the below routes just handles the HTML page that the user gets sent to.

router.route('/')
  .get(function(req, res){
    res.redirect('/home');
});

router.route('/home')
  .get(checkIfUser, function(req, res){
    res.render('home', {user: req.user});
});

router.route('/login')
  .get(function(req, res){
    res.render('login', {
      message: req.flash('loginMessage'),
      user: req.user
    });
  })
  .post(passport.authenticate('local', {
    successRedirect: '/home',
    failureRedirect: '/login',
    failureFlash: true
}));

function checkIfUser(req, res, next){
    if (req.isAuthenticated()) {
      return next();
    }
    req.flash('loginMessage', 'Please log in');
    res.redirect('/login');
}

module.exports = router;
