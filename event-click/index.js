//Selecteurs
// document.querySelector('h4').style.color = "yellow";
// const baliseHtml = document.querySelector('h4');
// baliseHtml.style.color = "yellow";

// Click Event

const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const response = document.querySelector("p");
// pour injecter une propriété de style
// questionContainer.addEventListener('click', () => {
// 	questionContainer.style.background = "red";
// })

// pour injecter une class de css avec plusieurs propriétés

questionContainer.addEventListener("click", () => {
  questionContainer.classList.toggle("question-click");
});

btn1.addEventListener("click", () => {
  response.classList.add("show-response");
  response.style.background = "green";
});
btn2.addEventListener("click", () => {
  response.classList.add("show-response");
  response.style.background = "red";
});

// #id > class > baliseHtml
//----------------------------------------------

//Mouse Events

//Quand la souris bouge, récupère moi son emplacement
const mousemove = document.querySelector(".mousemove");
window.addEventListener("mousemove", (e) => {
  mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";
});

// Quand l'user clique et laisse appuyé,  agrandis le cercle
window.addEventListener("mousedown", () => {
  mousemove.style.transform = "scale(2) translate(-25%, -25%)";
});

// quand l'user relache le click, change la couleur
window.addEventListener("mouseup", () => {
  mousemove.style.transform = "scale(1) translate(-50%, -50%)";
  mousemove.style.border = "2px solid teal";
});

// quand l'user survole la zone "questionContainer" , change la couleur du background
questionContainer.addEventListener("mouseenter", () => {
  questionContainer.style.background = "rgba(0,0,0,0.6)";
});

// quand l'user sort de la zone questionContainer, change la couleur du bacdkground
questionContainer.addEventListener("mouseout", () => {
  questionContainer.style.background = "pink";
});

// quand l'user survole la réponse, incline le texte de 2deg
response.addEventListener("mouseover", () => {
  response.style.transform = "rotate(2deg)";
});

//----------------------------------------------------

//Keypress

