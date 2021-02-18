var scoreDiv = $("#scoreVal");
var highScore = localStorage.getItem(highScore) || [];
var lastScore = localStorage.getItem("lastScore");
var finalScore = localStorage.getItem("final");

$("#score").text(finalScore)
var localScore = prompt("You scorced " + finalScore + "Enter your Initials")
highScore.push(localScore)
localStorage.setItem("highScore", finalScore)
console.log(highScore)
