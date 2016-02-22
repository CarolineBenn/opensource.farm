var User = require('../models/user');
var passport = require('passport');
var methodOverride = require('method-override');


function login(req, res){
  res.render('login.ejs', { title: 'Login' });
}

function signup(req, res){
  res.render('signup.ejs', { title: 'Sign Up' });
}

function addNewProject(req, res) {  
  res.render('new-project.ejs', { title: 'Add New Project' }); // { message: req.flash('errorMessage') });
};

function viewAllUsers(req, res){
  User.find({}, function(err, users) {
    console.log(users);
    if (err) return response.status(404).send(err);
    res.render('users.ejs', { users: users })
  });
}

function viewProfile(req, res){

    var id = req.params.id;
    User.findById({ _id: id }).exec(function(err, user) {
      if (err) return res.status(500).send(err);
      if (!user) return res.status(404).send(err);
      res.render('profile.ejs', { 'user' : user})
    })
  }


function editProfile(req, res){
  var id = req.params.id;

  User.findById(id, function(error, user) {
    if(error) console.log(error)
      console.log("***")
      console.log(user)
    res.render('edit-profile.ejs', {"user": user});
  });
}

function updateUser(req, res){
  User.findById(req.params.id,  function(err, user) {
    console.log("user:")
    console.log(user)
    console.log("err:")
    console.log(err)
    console.log('req.body:')
    console.log(req.body)
    if (err) return res.status(500).json({ message: "Something went wrong!" });
    if (!user) return res.status(404).json({ message: 'No user found.' });

    if (req.body.username)   user.local.username   = req.body.username;
    if (req.body.firstname)  user.local.firstname  = req.body.firstname;
    /*
    if (req.body.surname)    user.local.surname    = req.body.surname;
    if (req.body.email)      user.local.email      = req.body.email;
    if (req.body.password)   user.local.password   = req.body.password;
    if (req.body.avatar)     user.local.avatar     = req.body.avatar;
    if (req.body.location)   user.local.location   = req.body.location;
    if (req.body.occupation) user.local.occupation = req.body.occupation;
    if (req.body.aboutme)    user.local.aboutme    = req.body.aboutme;
    if (req.body.github)     user.local.github     = req.body.github;
    if (req.body.twitter)    user.local.twitter    = req.body.twitter;
    if (req.body.facebook)   user.local.facebook   = req.body.facebook;
    */

    user.save(function(err) {
     if (err) return res.status(500).json({message: "Something went wrong!"});

      res.status(201).json({message: 'User successfully updated.', user: user});
    });
  });
}

function logout(req, res){
  req.logout();
  res.redirect('/');
}

function isLoggedIn(req, res, next) {
    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();
    // if they aren't redirect them to the home page
    res.redirect('/');
}



/* HAVE YOU EXPORTED? */
/* HAVE YOU EXPORTED? */

module.exports = {
  signup: signup,
  login: login,
  logout: logout,
  viewAllUsers: viewAllUsers,
  viewProfile: viewProfile,
  editProfile: editProfile,
  updateUser: updateUser,
  isLoggedIn: isLoggedIn,
  addNewProject: addNewProject
}
