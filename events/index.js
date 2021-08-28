const btn = document.querySelector("#btn");
const img = document.getElementById("img");
btn.addEventListener('click', () => {
	img.classList.toggle('show');
})

//***************************************

const mouseEvent = document.querySelector('.mouseEvent');
const horizontal= document.querySelector('.horizontal');
const vertical = document.querySelector('.vertical');

mouseEvent.addEventListener('mousemove', (e) => {
;horizontal.innerHTML = e.y ;
 vertical.innerHTML = e.x;
	mouseEvent.style.left = e.x / window.innerWidth * 100 + "%";
})