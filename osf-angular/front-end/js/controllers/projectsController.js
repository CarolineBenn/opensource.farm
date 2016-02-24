angular
  .module('logging')
  .controller('ProjectsController', ProjectsController);

ProjectsController.$inject = ["Project", "User", "$state", "CurrentUser", "$stateParams"];
function ProjectsController(Project, User, $state, CurrentUser, $stateParams){
  var self = this;

  self.all      = [];
  self.users    = [];
  self.project  = {};

  self.getProjects = function(){
    Project.query(function(data){
      console.log(data)
      self.all = data;
    });
  };

  self.getProject = function(){
    Project.get({ id: $stateParams.id }, function(data){
      self.project = data;
      console.log(data);
    })
  }

  self.getUsers = function(){
    User.query(function(data){
       self.users = data;
    });
  };

  self.add = function(){
    var project = { project: self.project };

    Project.save(project, function(data){
      self.all.push(data);
      self.project = {};
      $state.go('projects');
    });
  };

  self.getProjects();
  self.getProject();
  self.getUsers();
}
