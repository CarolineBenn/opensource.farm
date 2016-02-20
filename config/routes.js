var express = require('express');
var router  = express.Router();

var farmController = require('../controllers/farmController')

router.route('/')
  .get(farmController.home);


module.exports = router;
