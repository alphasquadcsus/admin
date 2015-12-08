var quiz = require('../controllers/quiz.server.controller');

module.exports = function(app){
	app.route('/quiz')
		.post(quiz.add)
		.get(quiz.get);
};