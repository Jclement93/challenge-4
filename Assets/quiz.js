function startQuiz() {
    
}

function recordScore(){

}

function displayScores(){
    
}

function startTimer(duration, display) {
    var timer = duration, seconds;
    setInterval(function () {
        seconds = parseInt(timer);

        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    var minuteplus = 75,
        display = document.querySelector('#time');
    startTimer(minuteplus, display);
};

const myQuestions = [
    {
      question: "Commonly used data types do NOT include:",
      answers: {
        a: "Strings",
        b: "Booleans",
        c: "Alerts",
        d: "Numbers",
      },
      correctAnswer: "c"
    },
    {
      question: "The condition in an if/else statement is enclosed within:",
      answers: {
        a: "Curly Brackets",
        b: "Parentheses",
        c: "Quotes",
        d: "Square brackets",
      },
      correctAnswer: "b"
    },
    {
      question: "Arrays in JavaScript can be used to store:",
      answers: {
        a: "Numbers and strings",
        b: "Other arrays",
        c: "Booleans",
        d: "All of the above",
      },
      correctAnswer: "d"
    },
    {
        question: "String values must be enclosed within ____ when assigning to variables.",
        answers: { 
            a: "Commas",
            b: "Curly brackets",
            c: "Quotes",
            d: "Parentheses",
        },
        correctAnswer: "c"
    },
    {
        question: "A very useful tool used during development for debugging and printing content to the debugger is:",
        answers: {
            a: "JavaScript",
            b: "Terminal/bash",
            c: "for loops", 
            d: "Console.log",
        },
        correctAnswer: "d",
    },
  ];

//Variables
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
var highScores = [

]

startQuiz();

submitButton.addEventListener('click', showResults);