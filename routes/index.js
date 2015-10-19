var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Quiz = require('../models/Quiz.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/*Integration with Edgar's front end*/
router.get('/viewQuizzes2', function(req, res){
	Quiz.find(function(err, docs){
		if(err)
			res.send(err);
		res.render('viewQuizzes2', {quizzes: docs}); //Render page to view quizzes
	});
});
router.get('/addQuiz2', function(req, res){
	res.render('addQuiz2'); //Render Edgar's page to add a quiz
});
router.post('/addQuiz2', function(req, res, next){
	var quiz = new Quiz(); //Make new quiz

	quiz.name=req.body.name; 
	quiz.tour=req.body.tour;
	
	/*Still working on input into the subSchema*/
	var questions = JSON.parse(req.body.questions);
	var answers = JSON.parse(req.body.answers);
	var answerKeys = JSON.parse(req.body.answerKeys);
	
	for(var i = 0; i < questions.length;i++){
		quiz.questions.question=questions[i];
		quiz.questions.answers=answers[i];
		quiz.questions.answerKey=answerKeys[i];
	}
	
	//Save to database
	quiz.save(function(err){
		if(err)
			res.send(err);
		console.log('quiz added to db');
		res.redirect('/viewQuizzes2');
	});

	//var obj = JSON.parse(req.body.questions);
	//console.log(obj[1]);
});







module.exports = router;
