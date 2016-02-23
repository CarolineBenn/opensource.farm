var mongoose = require("mongoose");

var projectSchema = mongoose.Schema({
  title: String,
  shortdescription: String,
  longdescription: String,
  details: String,
  photos: String,
  components: String,
  logs: String,
  category: String,
  tags: String,
  github: String,
  users: [{ type: mongoose.Schema.ObjectId, ref: 'User' }]
  });

module.exports = mongoose.model('Project', projectSchema);