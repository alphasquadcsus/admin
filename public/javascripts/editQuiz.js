var quizObj;
function setQuiz(quiz){
	quizObj = new Quiz(quiz.name, quiz.tour); //Works, creates new quiz object
	for(var i = 0; i < quizData.questions.length; i++){
		quizObj.addQuestion(quizData.questions[i].text,quizData.questions[i].answers,
			quizData.questions[i].answerKey,i);
	}
	genQuizTemplate(quizObj);
};
function getQuiz(){
	return quizObj;
}

