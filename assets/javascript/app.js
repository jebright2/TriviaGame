var counter = 30;
var currentQuestion = 1;
var correctAnswer = 0;
var wrongAnswer = 0;
var score = 0; 
var timer;

//Question and answer choices

function displayQuestion() {
    
    var question = triviaQuestions [currentQuestion].question;
    var options = triviaQuestions [currentQuestion].options;

    //time display
    $(time).html('Time: ' + counter +" secs");

    $('#game').html('<p>' + question + '</p>');
}

displayQuestion();