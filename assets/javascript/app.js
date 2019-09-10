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