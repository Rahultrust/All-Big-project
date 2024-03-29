const app = document.querySelector("#app");
const dashboard = document.querySelector("#dashboard");
const quizContainer = document.querySelector("#quiz-container");
const scoreBoard = document.querySelector("#score-board");
const usernameInput = document.querySelector("#username");
const startQuizBtn = document.querySelector("#start-quiz-btn");
const nextQuestionBtn = document.querySelector("#next-question-btn");
const quizForm = document.querySelector("#quiz-form");
const question = document.querySelector("#question");
const options = document.querySelector("#options");
const scoreBoardBody = document.querySelector("#score-board-body");

let currentQuestion = 0;
let score = 0;
let questions = [
  {
    text: "What is the capital of India?",
    options: [
      "London",
      "New Delhi",
      "Berlin",
      "Rome"
    ],
    answer: 2
  },
  {
    text: "How is the prime-minister of India?",
    options: [
      "papu/Rahul(Gandhi) ",
      " Shri Narenda Modi",
      "soniya Gandhi",
      "YogiAditNath"
    ],
    answer: 2
  },
  {
    text: "who is the first Rashtapati of India?",
    options: [
      "Rajendra prasad",
      "Sarvepalli Radhakrishna",
      "Zakir husain",
      "Varahagiri"
    ],
    answer: 1
  },
  {
    text: "Who is the current president of india?",
    options: [
      "Sundar pichai",
      "smt Droupadi Murmu",
      "Ratan",
      "Narendra Modi"
    ],
    answer: 2
  }
];

startQuizBtn.addEventListener("click", function(event) {
  event.preventDefault();
  dashboard.style.display = "none";
  quizContainer.style.display = "block";
  loadQuestion();
});

nextQuestionBtn.addEventListener("click", function(event) {
  event.preventDefault();
  let selectedOption = -1;
  for (let i = 0; i < quizForm.elements.length - 1; i++) {
    if (quizForm.elements[i].checked) {
      selectedOption = i;
      break;
    }
  }
  if (selectedOption === -1) {
    alert("Please select an option");
    return;
  }
  if (selectedOption === questions[currentQuestion].answer) {
    score++;
  }
  currentQuestion++;
  if (currentQuestion === questions.length) {
    quizContainer.style.display = "none";
    scoreBoard.style.display = "block";
    updateScoreBoard();
  } else {
    loadQuestion();
  }
});

function loadQuestion() {
  question.textContent = questions[currentQuestion].text;
  options.innerHTML = "";
  for (let i = 0; i < questions[currentQuestion].options.length; i++) {
    options.innerHTML += `
      <div>
        <input type="radio" id="option-${i}" name="option" value="${i}">
        <label for="option-${i}">${questions[currentQuestion].options[i]}</label>
      </div>
    `;
  }
  nextQuestionBtn.disabled = false;
}

function updateScoreBoard() {
  scoreBoardBody.innerHTML = "";
  let username = usernameInput.value || "anonymous";
  scoreBoardBody.innerHTML += `
    <tr>
      <td>${username}</td>
      <td>${score}/${questions.length}</td>
    </tr>
    `;
}