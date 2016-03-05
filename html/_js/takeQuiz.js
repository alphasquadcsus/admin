var quiz;
$(document).ready(function(){
	quiz = new Quiz("concrete", "1"); //Works, creates new quiz object
	
	/*
	for(var i = 0; i < quizData.questions.length; i++){
		quizObj.addQuestion(quizData.questions[i].text,quizData.questions[i].answers,
			quizData.questions[i].answerKey,i);
	}
	*/
	
	
	var question = "test";
	var answers = [];
	answers.push("asdf");
	answers.push("zxcv");
	answers.push("qwer");
	var answerKey = 2;
	quiz.addQuestion(question, answers, answerKey);
	question = "test2";
	answers = [];
	answers.push("asdf");
	answers.push("zxcv");
	answers.push("qwer");
	answerKey = 1 ;
	quiz.addQuestion(question, answers, answerKey);
	
	initQuiz();
	
	function initQuiz(){
		var i = quiz.getQuestions().length;
		addQuestion(quiz, i);
	}
	
	function addQuestion(quizObj, index){
		alert("test");
		var i = 0;
        var buffer = quizObj.getQuestions();
		var questionName = buffer[index]; 
		buffer = quizObj.getAnswers();
		var arrQuestion = buffer[index];	
		buffer = quizObj.getAnswerKeys();
		var answerKey = buffer[index];
        var $questionDiv = $("<div>", {id: "question"});
		$questionDiv.append("<br><b>" + questionName +":</b>" + space + "<input type='button' id='question"+questionCount+"' value='Edit'><br>");
		
		for(i = 0; i < arrQuestion.length; i++) {
			$questionDiv.append(space, (i+1) +") " + arrQuestion[i]+"<br>");
		}
		
		$questionDiv.appen("<input type='button' id='submitQuestion' value='Submit'><br>s")
		//$questionDiv.append("Answer: " + answerKey +"<br>");
		jQuestions.append($questionDiv);
		$(#'quiz').append(jQuestions);
		   
    }
	
	function submitQuestion(answerKey){
		
	}
})
	

