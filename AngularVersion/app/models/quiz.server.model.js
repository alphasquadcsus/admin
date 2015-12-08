var mongoose = require('mongoose'),
	schema = mongoose.Schema;

var questionSchema = new schema({ //Question Schema, how data stored for each question
	text: String,
	answers: [String],
	answerKey: String
});

var quizSchema = new schema({ //Quiz Schema, how data stored for each quiz
	name: String,
	tour: String,
	questions: [questionSchema]
},
{
	collection : 'quizzes' //Quizzes put into 'quizzes' collection
});

module.exports = mongoose.model('Quiz',quizSchema);