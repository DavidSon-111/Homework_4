// 1
function hideDiv() {
  const divText = document.getElementById("div-text");
  divText.style.display = "none";
}

// 2
const divElement = document.createElement("div");
divElement.setAttribute("id", "card");
const h2Element = document.createElement("h2");
h2Element.textContent = "Gandalf";
const linkElement = document.createElement("a");
linkElement.textContent = "Go to profile";
linkElement.setAttribute("href", "#");
divElement.appendChild(h2Element);
divElement.appendChild(linkElement);

document.body.appendChild(divElement);

// 3
const answers = {
  q1: "Laravel",
  q2: 15,
  q3: 4,
};
let score = 0;
function check(questionId, buttonId, divClass) {
  const chosenAnswer = document.getElementById(buttonId);
  const isCorrect = answers[questionId] == chosenAnswer.innerText;
  // console.log(chosenAnswer.innerText);
  const questionDiv = document.querySelector(`.${divClass}`);
  questionDiv.querySelectorAll("button").forEach((btn) => {
    btn.disabled = true;
  });
  if (isCorrect) {
    chosenAnswer.style.backgroundColor = "green";
    score++;
  } else {
    chosenAnswer.style.backgroundColor = "red";
  }
  document.getElementById("score").innerText = `Score: ${score}`;
}
