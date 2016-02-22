var express  = require('express');
var router   = express.Router();
var passport = require('passport');

var usersController = require('../controllers/usersController');
var farmController  = require('../controllers/farmController');



router.route('/signup')
  .get(usersController.signup)
  .post(usersController.signup)

router.route('/login')
  .get(usersController.login)
  // .post(usersController.login)

router.route('/logout')
  .get(usersController.logout)  

router.route('/profile')
  // For when authentication is available:
  // .get(usersController.isLoggedIn, usersController.viewProfile)
  .get(usersController.viewProfile)


router.route('/life-on-the-farm')
  .get(farmController.lifeOnTheFarm);

// This is just a template so I can see how it works:
router.route('/project')
  .get(farmController.viewProject)


router.route('/projects')
  .get(farmController.getAllProjects);

router.route('/new-project')
  .get(usersController.addNewProject);

  router.route('/')
    .get(farmController.home);

module.exports = router;
