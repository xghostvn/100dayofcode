var express = require('express');
var router = express.Router();

/* GET home page. */

var home_controller=require('../controllers/homeController');

router.get('/', home_controller.index);

module.exports = router;

 