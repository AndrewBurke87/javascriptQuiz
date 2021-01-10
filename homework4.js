function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function () {
    return this.questions[this.questionIndex];
}

Quiz.prototype.guess = function (answer) {
    if (this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }

    this.questionIndex++;
}

Quiz.prototype.ended = function () {
    return this.questionIndex === this.questions.length;
}


function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype.isCorrectAnswer = function (choice) {
    return this.answer === choice;
}


function populate() {
    if (quiz.ended()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for (var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    let button = document.getElementById(id);
    button.onclick = function () {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOver = "<h1>Result</h1>";
    gameOver += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOver;
};

// create questions here
var questions = [
    new Question("What is the symbol used to identify an Array?", ["()", "<>", "[]", "{}"], "[]"),
    new Question("If Javascript was part of the human body what would it be?", ["Muscles", "Bones", "Skin", "All of the Above"], "Muscles"),
    new Question("What is the command to auto populate the HTML document using bootstraps?", ["b4-$", "!", "b4-#", "$()"], "b4-$"),
    new Question("Where should you place the script tag in an HTML documnet?", ["head", "body", "header", "footer"], "body"),
    new Question("What is the best way to call the same code multiple time without having to add the same code over and over?", [".querySelector", "Span", "Var", "Function"], "Function")
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();




// let arrObj = JSON.parse(localStorage.getItem('highScore')) || [];
// count = 75;
// const timer = setInterval(function() {
//     count--
// }, 1000)
// clearInterval(timer)
// let playerScore = {
//     initials: document.getElementById('initials').value,
//     score: count
// };
// arrObj.push(playerScore)
// localStorage.setItem('highScore', JSON.stringify(arrObj))
