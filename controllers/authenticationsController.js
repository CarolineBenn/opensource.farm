var passport = require("passport");
var User     = require('../models/user');
var secret   = require('../config/config').secret 
var jwt      = require('jsonwebtoken');

function register(req, res, next) {

  var localStrategy = passport.authenticate('local-signup', function(err, user, info) {
    console.log(user)
    console.log("***")
    console.log(err)
    if (err) return res.status(500).json({ message: 'Something went even more wrong!' });
    if (!user) return res.status(401).json({ message: 'User already exists!' });

    // User has authenticated so issue token 
    var token = jwt.sign(user, secret, { expiresIn: 60*60*24 });
    
    // Send back the token to the front-end to store
    return res.status(200).json({ 
      // success: true,
      message: "Thank you for authenticatiiiiing",
      token: token,
      user: user
    });
  });

  return localStrategy(req, res, next);
};


function login(req, res, next) {
  User.findOne({
    "local.email": req.body.email
  }, function(err, user) {
    if (err) return res.status(500).json(err);
    if (!user) return res.status(403).json({ message: 'No user found.' });
    if (!user.validPassword(req.body.password)) return res.status(403).json({ message: 'Authentication failed. Wrong password.' });

    var token = jwt.sign(user, secret, { expiresInMinutes: 1440 });

    return res.status(200).json({
      success: true,
      message: 'Welcome!',
      token: token
    });
  });
};

module.exports = {
  login: login,
  register: register
}