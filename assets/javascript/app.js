var counter = 20;
var currentQuestion = 0;
var correctAnswer = 0;
var missedQuestion = 0;
var score = 0; 
var timer = 0;

function nextQuestion() {

    //Used to end the game
    var lastQuestion = (triviaQuestions.length - 1) === currentQuestion;
    if (lastQuestion) {
        console.log("Game Over!");
    displayResult();

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

    $("#time").html("Time Remaining: " + counter +" secs");

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
    $('#time').html('Time Remaining: ' + counter +" secs");

    $('#game').html(`
        <h4>${question}</h4>
        ${loadoptions(options)}
        ${displayRemainingQuestions()}
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

    clearInterval(timer);
    var selectedAnswer = $(this).attr("data-answer");
    var correctAnswer = triviaQuestions [currentQuestion].correctAnswer;

    // Updating the score
    if (correctAnswer === selectedAnswer) {
        score++;
        nextQuestion ();
        console.log ('You got it!!!!');
    }   
    
    else {
        missedQuestion++;
        nextQuestion ();
        console.log('That answer is incorrect!');
    }
    
});

function displayResult () {
    var result = `
    <p>You answered ${score} question(s) correctly</p>
    <p>You missed ${missedQuestion} question(s)</p>
    <p>Total score: ${score*10}</p>
    <button class="btn btn-danger" id="reset">Reset Game</button>
    `;

    $("#game").html(result);
}
// Reset button functionality
$(document).on("click", "#reset", function() {
    console.log("This resets your game")

        counter = 20;
        currentQuestion = 0;
        correctAnswer = 0;
        missedQuestion = 0;
        score = 0; 
        timer = null;

    displayQuestion();
});

function displayRemainingQuestions() {
    var remainingQuestions = triviaQuestions.length - (currentQuestion + 1);
    
    return ("Remaining Question(s): " + remainingQuestions);
}

//Triggers Giphy

displayQuestion();