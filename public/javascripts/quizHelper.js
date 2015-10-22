/**
 * Created by Edgar on 10/14/15.
 */
var newQuiz;
var questionCount = 0;
var space = "&nbsp; &nbsp; &nbsp; &nbsp;";
$(document).ready(function(){
    //quiz object for creating a new quiz

    //HTML DOM Objects
    var jQuiz = $('#quiz');
    var jQuestions = $('#questions');

    $('#newQuiz').click(function(){
        var quizName = $('#quizName').val();
        var tourID = $('#tourID').val();
        newQuiz = new Quiz(quizName, tourID);
        $('#initQuiz').remove();
        jQuiz.before("<div>"+quizName+"</div><br>");
        generateQATemplate();

    });

    function generateQATemplate(){
        jQuestions.append(
            "<div id='tempQuestion'>" +
            "Question:<input type='text' id='newQuestion'>"+
            "<br>"+
            "Possible Answers:<br>"+
            "Answer 1: <input type='text' id='answer1'>" +
            "<br>" +
            "Answer 2: <input type='text' id='answer2'>" +
            "<br>" +
            "Answer 3: <input type='text' id='answer3'>" +
            "<br>" +
            "Answer 4: <input type='text' id='answer4'>" +
            "<br>" +
            "Answer 5: <input type='text' id='answer5'>" +
            "<br>" +
            "<br>" +
            "Answer key #: <input type='text' id='answerKey'>"+
            "<br><br>" +
            "<input type='button' id='submitQuestion' value='Submit Question'>" +
			"<input type='button' id='submitQuiz' value='Submit Quiz'>" +
            "</div>"
        );

        $('#submitQuestion').click(function(){
            addQuestion();
        });
		
		$('#submitQuiz').click(function(){
			submitQuiz();
		});

    }

    function addQuestion(){
		var questionName = $('#newQuestion').val();

        var arrQuestion = [];
        arrQuestion[0] = $('#answer1').val();
        arrQuestion[1] = $('#answer2').val();
        arrQuestion[2] = $('#answer3').val();
        arrQuestion[3] = $('#answer4').val();
        arrQuestion[4] = $('#answer5').val();

        var answer = $('#answerKey').val();
        newQuiz.addQuestion(questionName, arrQuestion, answer, questionCount);
		questionCount++; //Increment question number answer array is for
        $('#tempQuestion').remove();
        jQuiz.append("<br><b>" + questionName +":</b><br>");
		jQuiz.append(space, arrQuestion[0]+"<br>");
		jQuiz.append(space, arrQuestion[1]+"<br>");
		jQuiz.append(space, arrQuestion[2]+"<br>");
		jQuiz.append(space, arrQuestion[3]+"<br>");
		jQuiz.append(space, arrQuestion[4]+"<br>");
		
        generateQATemplate();
    };
	
	function submitQuiz(){
		//Ajax by Dennis
		$.ajax({
			url: '/addQuiz2', //Post url
			type: 'POST',
			dataType: "json", 
			data: {  //JSON data
				name: newQuiz.getQuizName(),
				tour: newQuiz.getTourID(),
				questions: JSON.stringify(newQuiz.getQuestions()), //Array to json string
				answers: JSON.stringify(newQuiz.getAnswers()),
				answerKeys: JSON.stringify(newQuiz.getAnswerKeys())
			},
			success: function(){
				
			},
		});
		window.location.replace('/viewQuizzes2'); //redirect 
	};


});
