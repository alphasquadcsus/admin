//Express config file
var config = require('./config'),
	express = require('express'),
	bodyParser = require('body-parser');
	
module.exports = function(){
	var app = express();

	app.use(bodyParser.urlencoded({ //Body Parser
		extended: true
	}));
	
	app.use(bodyParser.json()); //Body Parser
	
	app.set('views', './app/views'); //Render engine will look in app/views folder for html
	app.engine('html', require('ejs').renderFile); //HTML engine renders .html using ejs
	
	require('../app/routes/index.server.routes.js')(app); //Require index routes
	require('../app/routes/quiz.server.routes.js')(app); //Require quiz routes
	
	app.use(express.static('./public')); //Set public folder as static
	
	return app;
};