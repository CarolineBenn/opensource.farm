var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

var userSchema = new mongoose.Schema({ 
  local: {
    username:   { type: String },
    firstname:  { type: String },
    surname:    { type: String },
    email:      { type: String, unique: true, required: true },
    password:   { type: String, required: true },
    avatar:     { type: String },
    location:   { type: String },
    occipation: { type: String },
    aboutme:    { type: String },
    github:     { type: String },
    twitter:    { type: String },
    facebook:   { type: String }
  }
});


userSchema.statics.encrypt = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
}


module.exports = mongoose.model('User', userSchema);