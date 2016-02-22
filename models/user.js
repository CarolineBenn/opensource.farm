var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

var userSchema = new mongoose.Schema({ 
  local: {
    firstname: { type: String, unique: true, required: true },
    surname:   { type: String, unique: true, required: true },
    email:     { type: String, unique: true, required: true },
    password:  { type: String, required: true },
    avatar:    { type: String },
    location:  { type: String }
  }
});

//  / methods ======================
//  / generating a hash
//  userSchema.methods.generateHash = function(password) {
//     return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
//  ;

//  / checking if password is valid
// userSchema.methods.validPassword = function(password) {
//     return bcrypt.compareSync(password, this.local.password);
//  ;

//PASSPORT AUTHENTICATION
userSchema.statics.encrypt = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
}


module.exports = mongoose.model('User', userSchema);