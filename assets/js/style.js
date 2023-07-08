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
var leaderboard = document.querySelector(".leaderboard-box")
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
        // showPrompt()
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
        checkAnswer.textContent = "Wrong";
        secondsLeft;
    }
}

function showPrompt() {
    
    // questionBox.classList.add("hidden");
    // checkAnswer.classList.add("hidden");
   ()=>
   { var initals = prompt("Please enter your initials");
   leaderboard.classList.remove("hidden");}

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

function sendMessage() {
    alert("You ran out of time!")
    confirm("Would you like to be added to the leaderboard?"); {
        if(confirm == true) {
            // highScore()
        }
    }
}

// High score screen
// Enter initials and submit button

// var name = prompt();
// var score = secondsLeft;

// prompt("What is your name?")

// var scoreStr = localStorage.getItem("scores") || "[]"
// var scores = JSON.parse(scoreStr)
// console.log(scores)
// scores.push({name:name, score:score})
// scoreStr = JSON.stringify(scores)
// localStorage.setItem("scores", scoreStr)