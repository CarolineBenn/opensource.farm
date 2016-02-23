var mongoose = require("mongoose");

var projectSchema = mongoose.Schema({
  title: String,
  shortdescription: String,
  longdescription: String,
  photos: String,
  category: String,
  tags: String,
  github: String,


});

module.exports = mongoose.model('Project', projectSchema);