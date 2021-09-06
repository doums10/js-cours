const target = document.getElementById("target");
let array = ["développeur", "photographe", "créatif"];
let wordIndex = 0; //array[0]
let letterIndex = 0; // array [0][0]

//créer une fonction qui ajoute des lettres
const createLetter = () => {
  const letter = document.createElement("span");
  //insérer un span dans le h3
  target.appendChild(letter);
  //insérer la première lettre du mot dans le tableau
  letter.textContent = array[wordIndex][letterIndex];
  setTimeout(() => {
    //efface les lettres au bout de 2800ms
    letter.remove();
  }, 2800);
};

const loop = () => {
  setTimeout(() => {
    //condition pour que quand la boucle arrive à la fin du tableau, la boucle sur le tableau se remet à zéro
    if (wordIndex >= array.length) {
      wordIndex = 0;
      letterIndex = 0;
      loop();
    } else if (letterIndex < array[wordIndex].length) {
      createLetter();
      //ajoute une lettre en plus
      letterIndex++;
      // continue cette boucle tous les 5centièmes de secondes
      loop();
    } else {
      // par contre change de mot
      wordIndex++;
      letterIndex = 0;
      // attendre quelsques secondes avant de relancer la loop
      setTimeout(() => {
        loop();
      }, 2800);
    }
  }, 60);
};
loop();
