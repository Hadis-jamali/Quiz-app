const loader = document.getElementById("loader");
const container = document.getElementById("container");

const URL = "https://opentdb.com/api.php?amount=10&difficulty=medium&type=multiple";

let formatedData = null;

const fechData = async () => {
  const response = await fetch(URL);
  const json = await response.json();
  formatedData = json;
  start();
};

const start = () => {
  loader.style.display = "none";
  container.style.display = "block";
};

window.addEventListener("load", fechData);
