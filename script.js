const opt1 = document.querySelector('.option1');
const opt2 = document.querySelector('.option2');
const opt3 = document.querySelector('.option3');
const question = document.querySelector('.question');
const totalQuestionSpan = document.querySelector('.total-question');
const questionNumberSpan = document.querySelector('.question-num-value');
// const id = document.querySelector('#id');
const options = document.querySelector('.options').children;
const answerTrackerContainer = document.querySelector('.answers-tracker');
const correctAnswerSpan = document.querySelector('.correct-answers');
const totalQuestionSpan2 = document.querySelector('.total-question2');
const percentage = document.querySelector('.percentage');
let questionIndex;
let index = 0;
let myArray = [];
let myArr = [];
let score = 0;

const questions = [
    {
        q: 'Inside which HTML element do we put the JavaScript?',
        options: ['scripting', 'javascript', 'script'],
        answer:2 
    },
    {
        q: 'How did you declare a Javascript variables in ES6?',
        options: ['variable carName;', 'let carName;', 'var CarName;'],
        answer: 1
    },
    {
        q: 'How do you write "Hello World" in an alert box?',
        options: ['alert("Hello World")', 'msgBox("Hello World")',' alertBox("Hello World")'],
        answer: 0
    },
    {
        q: 'How do you create a function in JavaScript?',
        options: ['function = myFunction()','function myFunction()','function:myFunction()'],
        answer: 1
    },
    {
        q: 'How can you add a comment in a JavaScript?',
    options: ['!--This is a comment--', '//This is a comment', '*/This is a comment*/'],
        answer: 1
    }
];


function load() {
    totalQuestionSpan.innerHTML = questions.length;
    questionNumberSpan.innerHTML = index + 1;
    question.innerHTML = questions[questionIndex].q;
    opt1.innerHTML = questions[questionIndex].options[0];
    opt2.innerHTML = questions[questionIndex].options[1];
    opt3.innerHTML = questions[questionIndex].options[2];
    index++;
};


function check(element) {
    if (element.id == questions[questionIndex].answer) {
        element.classList.add('correct');
        updateAnswerTracker('correct');
        score++;
        console.log('score:'+score);

    } else {
        element.classList.add('wrong');
        updateAnswerTracker('wrong');
    }
    disabledOptions()
}

function disabledOptions() {
    for (let i = 0; i < options.length; i++) {
        options[i].classList.add('disabled');
        if (options[i].id == questions[questionIndex].answer) {
            options[i].classList.add('correct');
        }
    }
}

function enableOptions() {
    for (let i = 0; i < options.length; i++) {
        options[i].classList.remove('disabled', 'correct', 'wrong');
    }
}

function validate() {
    if (!options[0].classList.contains('disabled')) {
        alert('Please You need to select an option')
    }
    else {
        randomQuestion();
        enableOptions();
    }
}

function next() {
    validate();
}

function randomQuestion() {
    let randomNumber = Math.floor(Math.random() * questions.length);
    let hitDuplicate = 0;
    if (index == questions.length) {
        quizOver();
    } else {
        if (myArray.length > 0) {
            for (let i = 0; i < myArray.length; i++) {
                if (myArray[i] == randomNumber) {
                    hitDuplicate = 1;
                    break;
                }
            } if (hitDuplicate == 1) {
                randomQuestion();
            } else {
                questionIndex = randomNumber;
                load();
                myArr.push(questionIndex);
            }
        } if (myArray.length == 0) {
            questionIndex = randomNumber;
            load();
            myArr.push(questionIndex);
        }
        myArray.push(randomNumber);
    }

};

function answerTracker() {
    for (let i = 0; i < questions.length; i++) {
        const div = document.createElement('div');
        answerTrackerContainer.appendChild(div);
    }
}

function updateAnswerTracker(classNam) {
    answerTrackerContainer.children[index - 1].classList.add(classNam);
};

function quizOver() {
    document.querySelector('.quiz-over').classList.add('show');
    correctAnswerSpan.innerHTML = score;
    totalQuestionSpan2.innerHTML = questions.length;
    percentage.innerHTML = (score / questions.length) * 100 + "%";
};
function tryAgain(){
    window.location.reload();
}
window.onload = function () {
    randomQuestion();
    answerTracker();
}

