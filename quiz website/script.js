const quizDB=[
    {
        question:"Q1:What is the full form of html?",
        a:"HyperText Makeup Language",
        b:"HyperText Markup Language",
        c:"HyperText My Language",
        d:"HyperText Mine Language",
        ans:"answer2"
    },
    {
        question:"Q2:Choose the correct HTML element for the largest heading?",
        a:"<h1>",
        b:"<head>",
        c:"<heading>",
        d:"<h6>",
        ans:"answer1"
    },
    {
        question:"Q3:What is the correct HTML element for inserting a line break?",
        a:"<b>",
        b:"<i>",
        c:"<br>",
        d:"<hr>",
        ans:"answer3"
    },
    {
        question:"Q4:Which HTML element defines the title of a document?",
        a:"<head>",
        b:"<title>",
        c:"<meta>",
        d:"<body>",
        ans:"answer2"
    }
]
const question=document.querySelector('.question');
const option1=document.querySelector('#option1');
const option2=document.querySelector('#option2');
const option3=document.querySelector('#option3');
const option4=document.querySelector('#option4');
const submit=document.querySelector('#submit');
const answers=document.querySelectorAll('.answer');
const showScore=document.querySelector('#showScore');
let score=0;

let questionCount=0;
const loadQuestion=()=>{
    const questionList=quizDB[questionCount];
    question.innerText=questionList.question;
    option1.innerText=questionList.a;
    option2.innerText=questionList.b;
    option3.innerText=questionList.c;
    option4.innerText=questionList.d;
}
loadQuestion();

const getCheckedAnswer=()=>{
    let answer;
    answers.forEach((currAnsElem)=>{
        if(currAnsElem.checked)
        {
            answer=currAnsElem.id;
            console.log(answer);
            currAnsElem.checked=false;
        }
           
    });
   
    return answer;
    
}

submit.addEventListener('click',()=>{
    const checkedAnswer=getCheckedAnswer();
    if(checkedAnswer===quizDB[questionCount].ans)
    {
        score++;
        console.log(score);
    }
    questionCount++;
    if(questionCount<quizDB.length)
    {
        loadQuestion();
    }
    else
    {
    showScore.innerHTML=`
    <h3>You score ${score}/${quizDB.length}</h3>
    <button class="btn" onclick="location.reload()">Play Again</button>
    `
    showScore.style.display="block";
    }
});