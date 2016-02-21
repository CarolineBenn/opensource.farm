var mongoose   = require('mongoose');
var Schema     = mongoose.Schema;
var timestamps = require('mongoose-timestamp');


var User = require("./user");

var ProjectSchema = mongoose.Schema({
  title: String,
  short_description: String,
  detailed_description: String,
  photos: String,
  category: String,
  status: String,
  tags: String,
  github_link: String,
  twitter_link: String,
  facebook_link: String,
  team: String,
  _user: { type: Schema.Types.ObjectId, ref: 'User' }

});

ProjectSchema.plugin(timestamps);

module.exports = mongoose.model('Project', ProjectSchema);