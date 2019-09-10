var counter = 5;
var currentQuestion = 0;
var correctAnswer = 0;
var missedQuestion = 0;
var score = 0; 
var timer;

function nextQuestion() {
    currentQuestion++;
    displayQuestion();

}


//Timer function
function timesUp() {
    clearInterval(timer);
    missedQuestion++;

    nextQuestion();
    
}

function countDown() {
    counter--;

    $('#time').html('Time: ' + counter +" secs");

    if(counter === 0) {
        timesUp(timer);
    }
}

//Question and answer choices

function displayQuestion() {

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

displayQuestion();