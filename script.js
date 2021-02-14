var queryURL = "https://opentdb.com/api.php?amount=10";
var questions = "";
var correctAnswers = "";
var incorrect1 = "";
var incorrect2 = "";
var incorrect3 = "";
var btn1 = $("#answer1");
var btn2 = $("#answer2");
var btn3 = $("#answer3");
var btn4 = $("#answer4");
var scoreDiv = $("#scoreVal");
var score = 0;
var sec = 90;
// var index = 0;
var finalScore = $("#score")
// var sec = 90;
var time = document.getElementById('timerDisplay')
// var nextQuestion = 0;
function timer() {
    // var sec = 90;
    var timer = setInterval(function () {
        sec--;
        time = document.getElementById('timerDisplay').innerHTML = '00:' + sec;
        if (sec <= 0) {
            clearInterval(timer);
        }
    }, 1000);
}

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    var response = response;
    var index = 0;
    questions = response.results[0].question
    correctAnswers = response.results[0].correct_answer
    incorrect1 = response.results[0].incorrect_answers[0]
    incorrect2 = response.results[0].incorrect_answers[1]
    incorrect3 = response.results[0].incorrect_answers[2]
    var answer = [correctAnswers, incorrect1, incorrect2, incorrect3]
    $(".question").html(questions)
    btn1.text(correctAnswers)
    btn2.text(incorrect1)
    btn3.text(incorrect2)
    btn4.text(incorrect3)
    maxQuestions = 10;
    // console.log(response)
    // console.log(questions)
    // console.log(answer)

    function userChoice(score) {
        var index = 0;
        questions = response.results[index].question
        correctAnswers = response.results[index].correct_answer
        incorrect1 = response.results[index].incorrect_answers[0]
        incorrect2 = response.results[index].incorrect_answers[1]
        incorrect3 = response.results[index].incorrect_answers[2]
        console.log(sec)
        if (correctAnswers) {
            score++;
            console.log(score);
        } else {
            sec -= 10;
        }
    }
    function generateNextQuestion() {
        var nextQuestion = 1;
        if (response.results.indexOf(response.results[index]) === 0 || nextQuestion <= maxQuestions)
            index++;
        if (index > 9) {
            // clearInterval(timer)
            localStorage.setItem("final", score)
            location.href = "results.html"
        }
        questions = response.results[index].question
        correctAnswers = response.results[index].correct_answer
        incorrect1 = response.results[index].incorrect_answers[0]
        incorrect2 = response.results[index].incorrect_answers[1]
        incorrect3 = response.results[index].incorrect_answers[2]
        maxQuestions = 10
        $(".question").html(questions)
        btn1.text(correctAnswers)
        btn2.text(incorrect1)
        btn3.text(incorrect2)
        btn4.text(incorrect3)

    }
    var answer = [correctAnswers, incorrect1, incorrect2, incorrect3]
    for (let i = 0; i < answer.length; i++) {
        const choices = answer[i];
        console.log(choices)

    }
    $(".button").on("click", function () {
        userChoice(score)
        generateNextQuestion()
        if (correctAnswers === $(this).text()) {
            score++;
            scoreDiv.text(score)
        }

    })
    // $("#startBtn").on("click", function () {
    //     location.href = "questions.html"
    //     timer()
    // })
    timer()
    clearInterval()
})