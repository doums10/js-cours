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

//KeyPress Event

const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");
//fonction pour lancer un son
const ring = () => {
  audio = new Audio();
  audio.src = "./cours_z.mp3";
  audio.play();
};

// afficher la touche sur laquelle l'user appuie
document.addEventListener("keypress", (e) => {
  key.textContent = e.key;

  if (e.key === "j") {
    keypressContainer.style.background = "pink";
  } else if (e.key === "h") {
    keypressContainer.style.background = "teal";
  } else {
    keypressContainer.style.background = "red";
  }
  // à chaque touche pressée , lance le son indiqué
  ring();
});

//---------------------------------------------------------
// Scroll Event
//afficher la nav à un certain moment du scroll(elle est cachée pour l'instant au dessus de la page)
const nav = document.querySelector("nav");
//afficher la nav en fonction du scroll down et quand on remonte la nav disparaît
window.addEventListener("scroll", () => {
  //console.log(window.scrollY);
  if (window.scrollY > 120) {
    nav.style.top = "0";
  } else {
    nav.style.top = "-50px";
  }
});

//-----------------------------------------------------------
// Form Events
const inputName = document.querySelector("input[type=text]");
const select = document.querySelector("select");
const form = document.querySelector("form");
let pseudo = "";
let language = "";

// récupérer ce qui est tapé dans l'input du form
inputName.addEventListener("input", (e) => {
  pseudo = e.target.value;
});
// récupérer ce qui a été sélectionné dans le select
select.addEventListener("input", (e) => {
  language = e.target.value;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // injecter la réponse choisie en html dans la div en dessous du form
  if (cgv.checked) {
    document.querySelector("form > div").innerHTML = `
			<h3>Pseudo : ${pseudo}</h3>
			<h4>Language : ${language}</h4>`;
  } else {
    alert("Veuillez accepter les CGV");
  }
});

//---------------------------------------------------------
// Load event
// Quand on souhaite afficher des choses quand la page est chargé uniquement
window.addEventListener('load', () => {
	console.log("Document chargé!");
})

//----------------------------------------------------------
//For Each
