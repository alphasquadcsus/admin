var mongoose = require('mongoose');

var schema = mongoose.Schema;

var questionSchema = new schema({
	question: String,
	answers: [String],
	answerKey: Number
});

var quizSchema = new schema({ 
	name: String,
	tour: String,
	questions: [questionSchema]
});

module.exports = mongoose.model('Quiz',quizSchema);