const loader = document.getElementById("loader");
const container = document.getElementById("container");

const URL = "https://opentdb.com/api.php?amount=10&difficulty=medium&type=multiple";

let formatedData = null;

const fechData = async () => {
  const response = await fetch(URL);
  const json = await response.json();
  formatedData = formatData(json.result);
  console.log(formatedData);
  start();
};

const formatData = (questionData) => {
  const result = questionData.map((item) => {
    const questionObject = { question: item.question };
    const answers = [...item.incorrect_answers];
    const correctAnswerIndex = Math.floor(Math.random() * 4);
    answers.splice(correctAnswerIndex, 0, item.incorrect_answers);
    questionObject.answers = answers;
    questionObject.correctAnswerIndex = correctAnswerIndex;
    return questionObject;
  });
  return result;
};

const start = () => {
  loader.style.display = "none";
  container.style.display = "block";
};

window.addEventListener("load", fechData);
