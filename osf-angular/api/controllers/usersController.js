var User   = require('../models/user');

function usersIndex(req, res) {
  User.find(function(err, users){
    // console.log("users")
    // console.log(users)
    if (err) return res.status(404).json({message: 'Something went wrong.'});
    res.status(200).json(users);
  });
}

function usersShow(req, res){
  // var username = req.params.username;
  // console.log(req.params.username)
  User.findOne({ _id: req.params.id}).populate('projects').exec(function(err, user){
    console.log(user);
    if (err) return res.status(404).json({message: 'Something went wrong.'});
    res.status(200).json(user);
  });
}

function usersUpdate(req, res){
  User.findById(req.params.id,  function(err, user) {
    if (err) return res.status(500).json({message: "Something went wrong!"});
    if (!user) return res.status(404).json({message: 'No user found.'});

    if (req.body.email)      user.local.email      = req.body.name;
    if (req.body.password)   user.local.password   = req.body.password;
    if (req.body.username)   user.local.username   = req.body.username;
    if (req.body.firstname)  user.local.firstname  = req.body.firstname;
    if (req.body.surname)    user.local.surname    = req.body.surname;
    if (req.body.occupation) user.local.occupation = req.body.occupation;
    if (req.body.location)   user.local.location   = req.body.location;
    if (req.body.aboutme)    user.local.aboutme    = req.body.aboutme;
    if (req.body.github)     user.local.github     = req.body.github;
    if (req.body.twitter)    user.local.twitter    = req.body.twitter;
    if (req.body.facebook)   user.local.facebook   = req.body.facebook;
    if (req.body.image)      user.local.image      = req.body.image;

    user.save(function(err) {
     if (err) return res.status(500).json({message: "Something went wrong!"});

      res.status(201).json({message: 'User successfully updated.', user: user});
    });
  });
}

function usersDelete(req, res){
  User.findByIdAndRemove({_id: req.params.id}, function(err){
   if (err) return res.status(404).json({message: 'Something went wrong.'});
   res.status(200).json({message: 'User has been successfully deleted'});
  });
}

module.exports = {
  usersIndex:  usersIndex,
  usersShow:   usersShow,
  usersUpdate: usersUpdate,
  usersDelete: usersDelete
};
