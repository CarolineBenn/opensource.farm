var express = require('express'),
    router  = express.Router();

var usersController = require('../controllers/usersController');
var projectsController = require('../controllers/projectsController');
var authenticationsController = require('../controllers/authenticationsController');

router.post('/login', authenticationsController.login);
router.post('/register', authenticationsController.register);

router.route('/')
  .get(usersController.usersIndex, projectsController.projectsIndex)
 
router.route('/users')
  .get(usersController.usersIndex)
//   .post(usersController.usersCreate)

router.route('/users/:id') 
  .get(usersController.usersShow)
  .put(usersController.usersUpdate)
  .delete(usersController.usersDelete)

router.route('/projects')
  .get(projectsController.projectsIndex)
  .post(projectsController.projectsCreate)

router.route('/projects/:id') 
  .get(projectsController.projectsShow)
  .put(projectsController.projectsUpdate)
  .delete(projectsController.projectsDelete)


module.exports = router;