const score = JSON.parse(localStorage.getItem("score"));
const scoreEle = document.querySelector("p");
scoreEle.innerText = score;

const button = document.querySelector("button");
const input = document.querySelector("input");

const saveHandler = () => {
  if (!input.value || !score) {
    alert("Invalid score or username");
  }
};

button.addEventListener("click", saveHandler);
