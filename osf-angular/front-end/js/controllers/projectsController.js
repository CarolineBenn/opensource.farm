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
      // console.log(data)
      self.all = data;
    });
  };

  self.getProject = function(){
    Project.get({ id: $stateParams.id }, function(data){
      self.project = data;
      // console.log(data)
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


  self.edit = function(){
    var id = $stateParams.id;
    var project = { project: self.project}
    console.log(self.project)

    Project.update(self.project, function(data){
      console.log(data)
    });
   }


 self.delete = function(){
    console.log("delete");
    var project = { project: self.project };
    console.log(project.project._id);
    Project.delete({id: project.project._id })
    $state.go('home');
  }



  self.getProjects();
  self.getUsers();
}
