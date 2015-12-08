//Mongoose config file
var config = require('./config'),
	mongoose = require('mongoose');
	
module.exports = function(){
	var db = mongoose.connect(config.db); //Connect to url specified in config.js
	require('../app/models/quiz.server.model'); //Include quiz model in ../app/models
	return db; //Return database connection
};