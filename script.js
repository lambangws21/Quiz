/** @format */

const questions = [
  {
    question: "Siapa nama Presiden Indonesia saat ini?",
    answers: [
      { text: "Bapak Satria", correct: false },
      { text: "Bu Medi", correct: false },
      { text: "Bapak Jokowi", correct: true },
      { text: "Bapak Agus", correct: false },
    ],
  },
  {
    question: "Apa tempat kelahiran anak pertama?",
    answers: [
      { text: "Kuningan", correct: true },
      { text: "Cirebon", correct: false },
      { text: "Banyuwangi", correct: false },
      { text: "Jakarta", correct: false },
    ],
  },
  {
    question: "Siapa nama Presiden Indonesia saat ini?",
    answers: [
      { text: "Bapak Satria", correct: false },
      { text: "Bu Medi", correct: false },
      { text: "Bapak Jokowi", correct: true },
      { text: "Bapak Agus", correct: false },
    ],
  },
];
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const prevButton = document.getElementById("prev-btn");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  showQuestion();
}

function showQuestion() {
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
  answerButtonsElement.innerHTML = "";
  currentQuestion.answers.forEach((answer) => {
    const btn = document.createElement("button");
    btn.innerHTML = answer.text;
    btn.classList.add("btn");
    btn.addEventListener("click", () => {
      if (answer.correct) {
        score++;
      }
      nextQuestion();
    });
    answerButtonsElement.appendChild(btn);
  });

  if (currentQuestionIndex > 0) {
    prevButton.style.display = "block";
  } else {
    prevButton.style.display = "none";
  }
}

function nextQuestion() {
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    showQuestion();
  } else if (currentQuestionIndex === questions.length - 1) {
    currentQuestionIndex++;
    finishQuiz();
  }
}

function prevQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    showQuestion();
  }
}

function finishQuiz() {
  questionElement.innerHTML = "Quiz completed!";
  answerButtonsElement.innerHTML =
    "Your score: " + score + " out of " + questions.length;
  nextButton.innerHTML = "Restart";
  nextButton.addEventListener("click", startQuiz);
}

prevButton.addEventListener("click", prevQuestion);
nextButton.addEventListener("click", nextQuestion);
startQuiz();
