// Tutorial Version------------------------------------------------------;

// const question = document.getElementById("question"),
//     answerContainer = document.getElementById("answer-buttons"),
//     nextbtn = document.getElementById("next");

// const questions = [
//     {
//         question: "Which is largest animal in the world?",
//         answers: [
//             { text: "Shark", correct: false },
//             { text: "Blue whale", correct: true },
//             { text: "Elephant", correct: false },
//             { text: "Giraffe", correct: false }
//         ]
//     },
//     {
//         question: "Which is the smallest country in the world?",
//         answers: [
//             { text: "Vatican City", correct: true },
//             { text: "Bhutan", correct: false },
//             { text: "Nepal", correct: false },
//             { text: "Sri lanka", correct: false }
//         ]
//     },
//     {
//         question: "Which is largest desert in the world?",
//         answers: [
//             { text: "Kalahari", correct: false },
//             { text: "Gobi", correct: false },
//             { text: "Sahara", correct: false },
//             { text: "Antarctica", correct: true }
//         ]
//     },
//     {
//         question: "Which is the smallest continent in the world?",
//         answers: [
//             { text: "Asia", correct: false },
//             { text: "Australia", correct: true },
//             { text: "Arctic", correct: false },
//             { text: "Africa", correct: false }
//         ]
//     }
// ];

// let currentQuestionIndex = 0,
//     score = 0;

// function startQuiz() {
//     currentQuestionIndex = 0;
//     score = 0;
//     nextbtn.innerText = "Next";
//     displayData();
// }

// function displayData(){
//     resetState();
//     let currentQuestion = questions[currentQuestionIndex];
//     let questionNo = currentQuestionIndex + 1;
//     question.innerHTML = questionNo + ". " + currentQuestion.question;

//     currentQuestion.answers.forEach((answer)=>{
//         const button = document.createElement("button");
//             button.innerText = answer.text;
//             button.classList.add("btn");
//             answerContainer.appendChild(button);

//             if(answer.correct){
//                 button.dataset.correct = answer.correct;
//             }

//             button.addEventListener("click", selectAnswer);
//     })
// }

// function resetState(){
//     nextbtn.style.display = "none";

//     while(answerContainer.firstChild){
//         answerContainer.removeChild(answerContainer.firstChild);
//     }
// }

// function selectAnswer(e){
//     const selectedBtn = e.target,
//         isCorrect = selectedBtn.dataset.correct === "true";

//     if(isCorrect){
//         selectedBtn.classList.add("correct");
//         score++;
//     } else{
//         selectedBtn.classList.add("incorrect");
//     }

//     Array.from(answerContainer.children).forEach((button)=>{
//         if(button.dataset.correct === "true"){
//             button.classList.add("correct");
//         }
//         button.disabled = true;
//     })
//     nextbtn.style.display = "block";
// }

// function showScore(){
//     resetState();
//     question.innerHTML = `You scored ${score} out of ${questions.length}!`;
//     nextbtn.innerText = "Play Again";
//     nextbtn.style.display = "block";
// }

// function handleNextButton(){
//     currentQuestionIndex++;
//     if(currentQuestionIndex < questions.length){
//         displayData();
//     } else{
//         showScore();
//     }
// }

// nextbtn.addEventListener("click",()=>{
//     if(currentQuestionIndex < questions.length){
//         handleNextButton();
//     }else{
//         startQuiz();
//     }
// })

// startQuiz();



// My Version------------------------------------------------------;

const question = document.getElementById("question"),
    answerContainer = document.getElementById("answer-buttons"),
    nextbtn = document.getElementById("next");

const questions = [
    {
        question: "Which is largest animal in the world?",
        answers: [
            { text: "Shark", correct: false },
            { text: "Blue whale", correct: true },
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false }
        ]
    },
    {
        question: "Which is the smallest country in the world?",
        answers: [
            { text: "Vatican City", correct: true },
            { text: "Bhutan", correct: false },
            { text: "Nepal", correct: false },
            { text: "Sri lanka", correct: false }
        ]
    },
    {
        question: "Which is largest desert in the world?",
        answers: [
            { text: "Kalahari", correct: false },
            { text: "Gobi", correct: false },
            { text: "Sahara", correct: false },
            { text: "Antarctica", correct: true }
        ]
    },
    {
        question: "Which is the smallest continent in the world?",
        answers: [
            { text: "Asia", correct: false },
            { text: "Australia", correct: true },
            { text: "Arctic", correct: false },
            { text: "Africa", correct: false }
        ]
    }
];

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    score = 0;
    currentQuestionIndex = 0;
    nextbtn.innerHTML = "Next";
    displayData();
}

function displayData(){
    resetState();
    let currentObject = questions[currentQuestionIndex];
    question.innerHTML = `${currentQuestionIndex + 1}. ${currentObject.question}`;
    
    for(let i of currentObject.answers){
        let button = document.createElement("button");
        button.classList.add("btn");
        button.innerText = i.text;
        if(i.correct){
            button.dataset.correct = true;
        }
        answerContainer.appendChild(button)
        button.addEventListener("click", selectButton);
    }
}

function selectButton(element){
    let currentBtn = element.target;

    if(currentBtn.dataset.correct === "true"){
        currentBtn.classList.add("correct");
        score++;
    }else{
        currentBtn.classList.add("incorrect")
    }

    Array.from(answerContainer.children).forEach((answer)=>{

        if(answer.dataset.correct === "true"){
            answer.classList.add("correct");
        }else{
            answer.classList.add("incorrect")
        }
        answer.disabled = true;
    })
    nextbtn.style.display = "block";
}

function resetState(){
    nextbtn.innerHTML = "Next";
    while(answerContainer.firstChild){
        answerContainer.firstChild.remove();
    }
}

nextbtn.addEventListener("click",()=>{
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        displayData();
    }else if(currentQuestionIndex === questions.length){
        showScore();
    }else if(currentQuestionIndex > questions.length){
        startQuiz();
    }
})

function showScore(){
    question.innerHTML = `You got ${score} out of 4! `;
    nextbtn.innerHTML = "PlayAgain";
    answerContainer.innerHTML = "";
    currentQuestionIndex++;
}

startQuiz();