const num1 = Math.ceil(Math.random() * 10);
const a = Math.ceil(Math.random() * 10);
const b = Math.pow(-1, Math.ceil(Math.random() * 5)) * Math.ceil(Math.random() * 10);
let origin = a === -1 ? "-x" : a === 1 ? "x" : `${a}x`;
let intercept = b < 0 ? `- ${-b}` : `+ ${b}`;
let func = `${origin} ${intercept}`;

const questionElt = document.getElementById("question");
const inputElt = document.getElementById("input");
const formElt = document.getElementById("form");
const scoreElt = document.getElementById("score");

let score = JSON.parse(localStorage.getItem("score"));

if (!score) score = 0;

scoreElt.innerText = `score: ${score}`;

questionElt.innerText = `Quelle est l'image de ${num1} par la fonction f qui à x associe ${func} ?`;

const correctAns = a * num1 + b;

formElt.addEventListener("submit", () => {
    const userAns = +inputElt.value;
    if (userAns === correctAns) {
        score++;
        updateLocalStorage();
    } else {
        score--;
        updateLocalStorage();
    }
});

function updateLocalStorage() {
    localStorage.setItem("score", JSON.stringify(score));
}


