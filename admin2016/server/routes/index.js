var express = require('express');
var router = express.Router();

router.use('/sites',require('./siteRoutes')); //Includes the routes in the siteRoutes.js in the routes folder
router.use('/quizzes',require('./quizRoutes')); //Includes all routes associated with quiz in quizRoutes.js


module.exports = router;
