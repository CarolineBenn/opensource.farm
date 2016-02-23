angular
  .module('logging', ['ngResource', 'angular-jwt', 'ui.router'])
  .constant('API', 'http://localhost:3000/api')
  .config(MainRouter)
  .config(function($httpProvider){
    $httpProvider.interceptors.push('authInterceptor');
  });

  MainRouter.$inject = ['$stateProvider', '$urlRouterProvider'];

  function MainRouter($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: "/",
        templateUrl: "./js/views/home.html"
      })
      .state('login', {
        url: "/login",
        templateUrl: "./js/views/login.html"
      })
      .state('register', {
        url: "/register",
        templateUrl: "./js/views/register.html"
      })
      .state('profile', {
        url: "/profile",
        templateUrl: "./js/views/profile.html"
      })
      .state('users', {
        url: "/users",
        templateUrl: "./js/views/users.html"
      })
      .state('projects', {
        url: "/projects",
        templateUrl: "./js/views/projects.html",
        controller: "ProjectsController as projects"
      })
      .state('addproject', {
        url: "/project/new",
        templateUrl: "./js/views/addproject.html",
        controller: "ProjectsController as projects"
      })
      .state('lifeonthefarm', {
        url: "/lifeonthefarm",
        templateUrl: "./js/views/lifeonthefarm.html"
      });

    $urlRouterProvider.otherwise("/");
  }
