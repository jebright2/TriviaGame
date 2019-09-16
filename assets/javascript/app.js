var counter = 20;
var currentQuestion = 0;
var correctAnswer = 0;
var missedQuestion = 0;
var score = 0; 
var timer = 0;

function nextQuestion() {

    var lastQuestion = (triviaQuestions.length - 1) === currentQuestion;
    if (lastQuestion) {
        console.log("Game Over!");
    }
    else {
    currentQuestion++;
    displayQuestion();
    }
}


//Timer function
function timesUp() {
    clearInterval(timer);
    missedQuestion++;

    nextQuestion();
    
}

function countDown() {
    counter--;

    $("#time").html("Time: " + counter +" secs");

    if (counter === 0) {
        timesUp();
    }
}

//Question and answer choices

function displayQuestion() {
    counter = 20;
    timer = setInterval(countDown, 1000);
    
    var question = triviaQuestions [currentQuestion].question;
    var options = triviaQuestions [currentQuestion].options;

    //time display
    $('#time').html('Time: ' + counter +" secs");

    $('#game').html(`
        <h4>${question}</h4>
        ${loadoptions(options)}
    `);
}

function loadoptions(options) {
    var result = '';

    for(var i = 0; i < options.length; i++) {
        //Testing out new notation ` `
        result += `<p class="options" data-answer="${options[i]}">${options[i]}</p>`;
    }

    return result;
}
// Advance to next question after answer selected
$(document).on("click", ".options", function() {
    var selectedAnswer = $(this).attr("data-answer");
    var correctAnswer = triviaQuestions [currentQuestion].correctAnswer;

    // Updating the score
    if (correctAnswer === selectedAnswer) {
        score++;
        console.log ('You got it!!!!');
    }
    
    else {
        missedQuestion++;
        console.log('That answer is incorrect!');
    }
    
});


displayQuestion();