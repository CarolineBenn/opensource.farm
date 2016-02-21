var express = require('express');
var router  = express.Router();

var usersController = require('../controllers/usersController')
var farmController  = require('../controllers/farmController')

router.route('/')
  .get(farmController.home);

router.route('/life-on-the-farm')
  .get(farmController.lifeOnTheFarm);

router.route('/projects')
  .get(farmController.getAllProjects);

router.route('/new-project')
  .get(usersController.addNewProject);

module.exports = router;
