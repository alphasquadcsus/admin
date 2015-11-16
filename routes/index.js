var express = require('express');
var router = express.Router();

router.use(require('./siteRoutes')); //Includes the routes in the siteRoutes.js in the routes folder
router.use(require('./quizRoutes')); //Includes all routes associated with quiz in quizRoutes.js

/* Load the home page. */
router.get('/', function(req, res, next) {
	res.render('index'); //Renders the index page
});

module.exports = router;
