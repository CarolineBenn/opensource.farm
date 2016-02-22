var user= require('../models/user');

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

function viewProfile(req, res){
  res.render('profile.ejs', { title: 'Profile' })
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
  viewProfile: viewProfile,
  isLoggedIn: isLoggedIn,
  addNewProject: addNewProject
}
