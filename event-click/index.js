//Selecteurs
// document.querySelector('h4').style.color = "yellow";
// const baliseHtml = document.querySelector('h4');
// baliseHtml.style.color = "yellow";

// Click Event

const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector('#btn-1');
const btn2 = document.getElementById("btn-2");
const response = document.querySelector('p');
// pour injecter une propriété de style 
// questionContainer.addEventListener('click', () => {
// 	questionContainer.style.background = "red";
// })

// pour injecter une class de css avec plusieurs propriétés


questionContainer.addEventListener("click", () => {
	
  questionContainer.classList.toggle("question-click");
});

btn1.addEventListener('click', () => {
	response.style.visibility = "visible";
});
btn2.addEventListener("click", () => {
  	response.style.visibility = "hidden";

});

//----------------------------------------------