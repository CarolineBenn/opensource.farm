var Project = require("../models/project");
var User = require("../models/user");

function projectsIndex(req, res){
  Project.find({}, function(err, projects) {
    console.log("********************")
    console.log(projects)
    console.log("********************")
   
    if (err) return res.status(404).send(err);
    res.status(200).send(projects);
  });
}

function projectsShow(req, res){
  var id = req.params.id;
  console.log(req.params.id);
  Project.findOne({ _id: id })
    .populate('users')
    .exec(function(err, project) {
      console.log("Project:")
      console.log(project)
      if (err) return res.status(500).send(err);
      if (!project) return res.status(404).send(err);
      res.status(200).send(project);
  });
}


function projectsCreate(req, res){
  var project = new Project(req.body.project);
  project.save(function(err){
    if (err) return res.status(500).send(err);
    var id = req.body.project.user_id;
    User.findById(id, function(err, user){
       user.projects.push(project);
       user.save();
       return res.status(201).send(project);
    });
  });
}

/* HMMMMMMM..? */
function editProject(req, res){
  Project.findById({_id: id}, function(err, project){
    res.render('editproject')
  })
}


function projectsUpdate(req, res){
  var id = req.params.id;
  Project.findByIdAndUpdate({ _id: id }, req.body.project, function(err, project){
    if (err) return res.status(500).send(err);
    if (!project) return res.status(404).send(err);
    res.status(200).send(project);
  });
}

function projectsDelete(req, res){
  var id = req.params.id;
  Project.remove({ _id: id }, function(err) {
    if (err) return res.status(500).send(err);
    res.status(200).send();
  });
}

module.exports = {
  projectsIndex:  projectsIndex,
  projectsCreate: projectsCreate,
  projectsShow:   projectsShow,
  projectsUpdate: projectsUpdate,
  projectsDelete: projectsDelete
};
