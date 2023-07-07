// Button for start quiz
var startButton = document.querySelector("#start-button");
var startBox = document.querySelector("#start-box");
var questionBox = document.querySelector("#question-box")

startButton.addEventListener("click", start)
function start() {
    console.log("Start button has been clicked");
    startBox.classList.add("hidden");
    questionBox.classList.remove("hidden");
    setTime();
}

// Switches to screen with first question
// Switch case for every question?
var question = [""]
var questionCount;
//If answer right, move on to next question
//If answer wrong, subtract 5 seconds

// Timer going
// If timer reaches 0 or if all questions are answered, game over screen
var timeEl = document.querySelector(".timer")
var mainEl = document.getElementById("seconds");

var secondsLeft = 60;

function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = "Time: " + secondsLeft + " seconds";

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
        }
    }, 1000);
}

function sendMessage() {
    alert("You ran out of time!")
}

// High score screen
// Enter initials and submit button
var name = "Minhee"
var score = 80;

var scoreStr = localStorage.getItem("scores") || "[]"
var scores = JSON.parse(scoreStr)
console.log(scores)
scores.push({name:name, score:score})
scoreStr = JSON.stringify(scores)
localStorage.setItem("scores", scoreStr)