const quizDb = [
    {
        que: "Q1: What does HTML stand for?",
        a: "Hello To My Land",
        b: "Hey Text Markup Language",
        c: "HyperText Markup Language",
        d: "Hyper Text Markup Language",
        ans: "ans4"
    },
    {
        que: "Q2: What is the full form of CSS?",
        a: "Cascading Style Sheets",
        b: "Cascading Style Sheet",
        c: "Cartoon Style Sheets",
        d: "Cascading Super Sheets",
        ans: "ans1"
    },
    {
        que: "Q3: What is the full form of HTTP?",
        a: "HyperText Transfer Product",
        b: "Hey Text Transfer Protocol",
        c: "Hypertext Transfer Protocol",
        d: "Hypertext Text Protocol",
        ans: "ans3"
    },
    {
        que: "Q4: How can a datatype be declared to be a constant type?",
        a: "Const",
        b: "Var",
        c: "Let",
        d: "Constant",
        ans: "ans1"
    }
];

const heading = document.querySelector('.heading');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const next = document.querySelector('#next');
const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('.show-score');
const progress = document.querySelector('progress');
const msg = document.querySelector('.msg');
let questionCount = 0;
let score = 0;

progress.value = 100 / quizDb.length;

const showQuestionCount = () => {
    progress.previousElementSibling.innerText = `Questions: ${questionCount + 1}/${quizDb.length}`;
}

showQuestionCount();

const loadQuestions = () => {
    const questionList = quizDb[questionCount];
    heading.innerText = questionList.que;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
};

loadQuestions();

const getCheckAnswer = () => {
    let answer;
    answers.forEach((currAnswer) => {
        if (currAnswer.checked) {
            answer = currAnswer.id;
        }
    })
    return answer;
};

const reset = () => {
    answers.forEach((currAnswer) => {
        currAnswer.checked = false;
    })
}

const disableAnswer = () => {
    answers.forEach((currAnswer) => {
        currAnswer.disabled = true;
        currAnswer.style.cursor = "not-allowed";
    })
}

const enableAnswer = () => {
    answers.forEach((currAnswer) => {
        currAnswer.disabled = false;
        currAnswer.style.cursor = "pointer";
    })
}

next.addEventListener('click', () => {
    showScore.style.display = "none";
    const checkAnswer = getCheckAnswer();
    if (checkAnswer === quizDb[questionCount].ans) {
        ++score;
    }
    reset();
    if(!checkAnswer){
        msg.style.display = "block";
    }
    else{
        msg.style.display = "none";
        questionCount++;
        loadQuestions();
        showQuestionCount();
        progress.value += 100 / quizDb.length;
    }
    if (questionCount === quizDb.length - 1) {
        next.style.cursor = "not-allowed";
        next.disabled = true;
    }
    enableAnswer();
});

submit.addEventListener('click', () => {
    const checkAnswer = getCheckAnswer();
    if (checkAnswer === quizDb[questionCount].ans) {
        ++score;
    }
    showScore.style.display = "block";
    showScore.innerHTML = `<p> Your score is ${score}/${quizDb.length}<span>&#9996;&#127999;</span></p>
        <button onclick = "window.location.reload();">PLAY AGAIN</button>`;
    reset();
    disableAnswer();
});









