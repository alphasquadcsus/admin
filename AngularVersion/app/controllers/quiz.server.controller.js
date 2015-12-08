var Quiz = require('mongoose').model('Quiz');

exports.add = function(req, res, next){
	var quiz = new Quiz();
	quiz.name=req.body.name; //Get quiz name from post
	quiz.tour=req.body.tour; //Get tour id from post
	/*Parse input from quizHelper*/
	var questions = JSON.parse(req.body.questions);
	var answers = JSON.parse(req.body.answers);
	var answerKeys = JSON.parse(req.body.answerKeys);
	//Input to subDocument Questions of Quiz model
	for(var i = 0; i < questions.length;i++){
		quiz.questions.push({text : questions[i], answers : answers[i],answerKey : answerKeys[0]});
	};
	quiz.save(function(err){
		if(err){
			return next(err);
		}
		else{
			res.json(quiz);
		}
	});
};
exports.get = function(req, res, next){
	var quiz = Quiz.find(function(err, quiz){
		if(err)
			res.send(err);
		res.json(quiz); //Send json object quiz
	});
};
