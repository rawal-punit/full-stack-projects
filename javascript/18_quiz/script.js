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
      { text: "Sri Lanka", correct: false }
    ]
  } ,

  { question: "Which is the largest desert in the world?", answers: [ { text: "Kalahari", correct: false }, { text: "Gobi", correct: false }, { text: "Sahara", correct: false }, { text: "Antarctica", correct: true } ] }, 
  
    { question: "Which is the smallest continent in the world?", 
      answers: [ { text: "Asia", correct: false }, { text: "Australia", correct: true },
         { text: "Arctic", correct: false }, 
         { text: "Africa", correct: false } ] }
  
];


const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");


let index = 0;
let score = 0;


function startQuiz() {
  index = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}


function showQuestion() {
  resetState();

  let q = questions[index];
  questionElement.innerHTML = `${index + 1}. ${q.question}`;

  q.answers.forEach(ans => {
    let btn = document.createElement("button");
    btn.innerHTML = ans.text;
    btn.classList.add("btn");

    if (ans.correct) {
      btn.dataset.correct = "true";
    }

    btn.onclick = selectAnswer;
    answerButtons.appendChild(btn);
  });
}


function resetState() {
  nextButton.style.display = "none";
  answerButtons.innerHTML = "";
}


function selectAnswer(e) {
  let selected = e.target;
  let correct = selected.dataset.correct === "true";

  if (correct) {
    selected.classList.add("correct");
    score++;
  } else {
    selected.classList.add("incorrect");
  }

  Array.from(answerButtons.children).forEach(btn => {
    if (btn.dataset.correct === "true") {
      btn.classList.add("correct");
    }
    btn.disabled = true;
  });

  nextButton.style.display = "block";
}


nextButton.onclick = () => {
  index++;
  if (index < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
};

function showScore() {
  resetState();
  questionElement.innerHTML =
    `You scored ${score} out of ${questions.length}`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
  nextButton.onclick = startQuiz;
}

startQuiz();