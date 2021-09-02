// afficher le numéro du bouton cliqué dans la div h3
const buttons = document.querySelectorAll(".btn");
const result = document.getElementById("result");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    //injecter ce qui est cliqué dans le h3 sans effacer le précédent
    result.textContent += e.target.id;
  });
		//En cliquant sur  = effectue le calcul de ce qui est affiché
  equal.addEventListener("click", () => {
    // calcule moi tout ce qui est dans result.textContent
    result.textContent = eval(result.textContent);
  });
		// à chaque click sur C , INJECTE UNE CASE VIDE
		clear.addEventListener('click', () => {
			result.textContent = "";
		})
});

// MÉTHODE EVAL = calcule moi tout ce qui est inclus dans eval(....)
