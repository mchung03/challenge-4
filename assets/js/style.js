var questions = [
    {
        question: "To make a folder in Git Bash, the command is: ",
        choices: ["cd", "touch", "mkdir", "git mkdir"],
        answer: 2
    },
    {
        question: "Which of the following flexbox commands moves elements vertically?",
        choices: ["justify-content", "flex-direction", "flex-direction", "align-items"],
        answer: 3
    },
    {
        question: "To call a function, you need",
        choices: ["Just the name", "Parentheses", "Brackets", "Quotation Marks"],
        answer: 1
    },
    {
        question: 'What is the notation for "and"?',
        choices: ["||", "+=", "&&", '"and"'],
        answer: 2
    },
    {
        question: "Which property combines indexes into one string?",
        choices: [".join", ".concat", ".pop", ".add"],
        answer: 0
    }
];

var startButton = document.querySelector("#start-button");
var startBox = document.querySelector("#start-box");
var questionBox = document.querySelector("#question-box");
var questionText = document.querySelector(".question-text");
var questionNumber = document.querySelector(".question-number");
var choicesButtons = document.querySelectorAll(".choices");
var currentQuestionIndex = 0;

startButton.addEventListener("click", start)
function start() {
    startBox.classList.add("hidden");
    questionBox.classList.remove("hidden");
    // displayQuestion();
    setTime();
}

// Switches to screen with first question
// Array for each question
function displayQuestion() {
    questionNumber.textContent = 
    questionText.textContent = 
}

//If answer right, move on to next question
//If answer wrong, subtract 5 seconds

// Timer going
// If timer reaches 0 or if all questions are answered, game over screen
var timeEl = document.querySelector(".timer");
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
    confirm("Would you like to be added to the leaderboard?"); {
        if(confirm === true) {
            // highScore()
        }
    }
}

// High score screen
// Enter initials and submit button
// function highScore() {
//     var name = prompt();
//     var score = secondsLeft;

//     prompt("What is your name?")

//     var scoreStr = localStorage.getItem("scores") || "[]"
//     var scores = JSON.parse(scoreStr)
//     console.log(scores)
//     scores.push({name:name, score:score})
//     scoreStr = JSON.stringify(scores)
//     localStorage.setItem("scores", scoreStr)
// }