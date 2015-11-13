var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Quiz = require('../models/Quiz.js');

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index');
});
/*Integration with Edgar's front end*/
router.get('/viewQuizzes', function(req, res){
	var quiz = Quiz.find(function(err, quiz){
		if(err)
			res.send(err);
		res.render('viewQuizzes', {quizzes: quiz}); //Render page to view quizzes
	});
});
router.get('/addQuiz', function(req, res){
	res.render('addQuiz'); //Render Edgar's page to add a quiz
});
router.post('/addQuiz', function(req, res, next){
	var quiz = new Quiz(); //Make new quiz
	quiz.name=req.body.name; //Get quiz name from post
	quiz.tour=req.body.tour; //Get tour id from post
	/*Parse input from quizHelper*/
	var questions = JSON.parse(req.body.questions);
	var answers = JSON.parse(req.body.answers);
	var answerKeys = JSON.parse(req.body.answerKeys);
	//Input to subDocument of Quiz
	for(var i = 0; i < questions.length;i++){
		quiz.questions.push({text : questions[i], answers : answers[i],answerKey : answerKeys[0]});
	};
	//Save to database
	quiz.save(function(err){
		if(err)
			res.send(err);
		res.send({redirect:'/viewQuizzes'}); //Pass url to redirect for ajax to redirect to
	});
});
router.post('/deleteQuiz', function(req, res){
	var qID = req.body.quizID; //Get _id of the quiz
	Quiz.findById(qID,function(err, quiz){ //Find by _id
		if (err) return handleError(err);
		quiz.remove(); //Remove the quiz from collection
	});
	res.redirect('/viewQuizzes'); //Redirect back to 
});
router.post('/editQuiz', function(req, res){
	var qID = req.body.quizID; //Get _id of quiz
	Quiz.findById(qID,function(err, q){ // Find by _id
		if (err) res.send(err);
		//Render editQuiz.jade, passing it the quiz in quiz, and the script to create a quiz object
		res.render('editQuiz', {quiz:q, script:['javascripts/editQuiz.js']});  
	});
});

module.exports = router;
