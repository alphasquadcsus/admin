var quizObj;
$(document).ready(function(){
	//quizObj = new Quiz("concrete", "1"); //Works, creates new quiz object
	
	for(var i = 0; i < quizData.questions.length; i++){
		quizObj.addQuestion(quizData.questions[i].text,quizData.questions[i].answers,
			quizData.questions[i].answerKey,i);
	}
		
	/*
	var question = "test";
	var answers = [];
	answers.push("asdf");
	answers.push("zxcv");
	answers.push("qwer");
	var answerKey = 2;
	quizObj.addQuestion(question, answers, answerKey);
	question = "test2";
	answers = [];
	answers.push("asdf");
	answers.push("zxcv");
	answers.push("qwer");
	answerKey = 1 ;
	quizObj.addQuestion(question, answers, answerKey);
	*/
	genQuizTemplate(quizObj);
	

function getQuiz(){
	return quizObj;
}
})
	

