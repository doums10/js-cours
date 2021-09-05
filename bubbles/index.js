const bubbleMarker = () => {
  // créer un élément et l'insérer dans le body
  const bubble = document.createElement("span");
  // insérer dans le dom le span crée
  document.body.appendChild(bubble);
  bubble.classList.add("bubble");

  //Méthode Math.random() => créée un chiffre random de 0 à 1
  // ex multiplier cela par 100, obtenir un chiffre entre 0 et 100 etc...
  // console.log(Math.random() * 200 + 100);
  // en ajoutant + 100 on ajoute 100 au chiffre donc on obtient un chiffre minimum de 100
  const size = Math.random() * 200 + 100 + "px";
  // console.log(size);
  //injecter le css dans la classe bubble pour obtenir des bulles de tailles alléatoires entre 200 et 300px
  bubble.style.height = size;
  bubble.style.width = size;
  // insérer des valeurs random pour le top et left des bubbles
  bubble.style.top = Math.random() * 100 + 50 + "%";
  bubble.style.left = Math.random() * 100 + "%";
  const plusMinus = Math.random() > 0.5 ? 1 : -1;
  bubble.style.setProperty("--left", Math.random() * 100 + "%");
		setTimeout(() => {
				bubble.remove();
		},8000);
};
setInterval(bubbleMarker, 300);
