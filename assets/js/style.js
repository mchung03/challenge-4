var questions = [
    {
        question: "To make a folder in Git Bash, the command is: ",
        choices: ["A: cd", "B: touch", "C: mkdir", "D: git mkdir"],
        answer: "C: mkdir"
    },
    {
        question: "Which of the following flexbox commands moves elements vertically?",
        choices: ["A: justify-content", "B: flex-direction", "C: flex-direction", "D: align-items"],
        answer: "D: align-items"
    },
    {
        question: "To call a function, you need",
        choices: ["A: Just the name", "B: Parentheses", "C: Brackets", "D: Quotation Marks"],
        answer: "B: Parentheses"
    },
    {
        question: 'What is the notation for "and"?',
        choices: ["A: ||", "B: +=", "C: &&", 'D: "and"'],
        answer: "C: &&"
    },
    {
        question: "Which property combines indexes into one string?",
        choices: ["A: .join", "B: .concat", "C: .pop", "D: .add"],
        answer: "A: .join"
    }
];

var startButton = document.querySelector("#start-button");
var startBox = document.querySelector("#start-box");
var questionBox = document.querySelector("#question-box");
var questionText = document.querySelector(".question-text");
var questionNumber = document.querySelector(".question-number");
var leaderboard = document.querySelector("#leaderboard")
var choicesButtons = document.querySelectorAll(".choices");
var currentQuestionIndex = 0;
var checkAnswer = document.querySelector("#check-answer");
var question = document.querySelector("#question")

startButton.addEventListener("click", start)
function start() {
    startBox.classList.add("hidden");
    questionBox.classList.remove("hidden");
    displayQuestion();
    setTime();
}

// Timer going
// If timer reaches 0 or if all questions are answered, game over screen
var timeEl = document.querySelector(".timer");
var mainEl = document.getElementById("seconds");

var secondsLeft = 30;

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

// Switches to screen with first question
// Array for each question
function displayQuestion() {
    // questionNumber.textContent = "Question #" + (currentQuestionIndex + 1);
    // questionText.textContent = questions[0];
    if(currentQuestionIndex < 5 && secondsLeft > 0) {
    questionText.textContent = questions[currentQuestionIndex].question;
    for(var i = 0; i < 4; i++) {
        choicesButtons[i].textContent = questions[currentQuestionIndex].choices[i]
    }
    } else {
        questionBox.classList.add("hidden");
        checkAnswer.classList.add("hidden");
        showPrompt()
        leaderboard.classList.remove("hidden")
    }
}
question.addEventListener("click", e => 

{console.log(e.target)
    checkAnswerFunc(e, questions[currentQuestionIndex].answer)
    currentQuestionIndex++
    displayQuestion()
})

//If answer right, move on to next question
//If answer wrong, subtract 5 seconds
function checkAnswerFunc(event, answer) {
    if(event.target.innerText === answer) {
        checkAnswer.textContent = "Correct"
    } else {
        checkAnswer.textContent = "Wrong -5 seconds";
        secondsLeft--;
        secondsLeft--;
        secondsLeft--;
        secondsLeft--;
    }
}

function showPrompt() {
    var initials = prompt("Please enter your initials");
    highScore(initials);
}

function sendMessage() {
    alert("You ran out of time!")
}

// High score screen
// Enter initials and submit button
function highScore(initials) {
    var score = secondsLeft;
    var scoreStr = JSON.parse(localStorage.getItem("scores")) || []

    console.log(score)
    scoreStr.push({score, initials})
    scoreStr = JSON.stringify(scoreStr)
    localStorage.setItem("scores", scoreStr)
}

function displayScores () {
    var scoreStr = JSON.parse(localStorage.getItem("scores"))
}