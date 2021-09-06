// Rappel sur les types de données
let string = "Chaine";
let number = 25;
let boolean = true;
let maVariable; // type undefined

// Tableaux
let array = ["Bordeaux", "Nantes", "Paris"];
//console.log(array[1][2]);

let array2 = ["Bordeaux", 10, [3, 4], false, { nom: "Denis" }];
//console.log(array2[4].nom);
let object = {
  name: "Denis",
  age: 33,
  technos: ["React", "Javascript", "NodeJs"],
  admin: false,
};
// Dans un object
// ex admin:false
// admin = index false = valeur

//ajouter un élément dans un objet
//object.adresse = "22 rue du code";
// console.log(object.adresse);

let data = [
  {
    name: "Denis",
    age: 33,
    technos: ["React", "Javascript", "NodeJs"],
    admin: false,
  },
  {
    name: "Samia",
    age: 24,
    technos: ["CSS", "Javascript", "NodeJs"],
    admin: false,
  },
  {
    name: "Nikola",
    age: 33,
    technos: ["Php", "Javascript", "NodeJs"],
    admin: false,
  },
];
// console.log(data[1].name);
// ------------------------------------------------------------
// Les structures de contrôle

//IF
if (data[0].age > data[1].age) {
  // console.log(data[0].name + " est plus âgé que " + data[1].name);
} else {
  //Valeur si faux
}
//Ternaire
// valeur à tester ? si vrai : si faux

// While ---Tant que
let w = 0;
while (w < 10) {
  w++;
  //console.log("la valeur de w est : " + w);
}

// Les boucles For

for (const user of data) {
  // document.body.innerHTML += `<li>${user.name} - ${user.age}ans</li> `;
}

// on déclare la valeur de i / jusqu'où on boucle / on incrémente i si la condition 2 n'est opas remplie

// tant que tu n'as pas le tour entier du tableau, affiche moi les technos quisont dans le tableau

// tip --> le + devant le = permet de ne pas effacer l'info précédente
//

//Switch
// change la couleur du body quand on clique sur l'id de chaque techno
document.body.addEventListener('click', (e) => {
	switch (e.target.id) {
    case "javascript":
      document.body.style.background = "yellow";
      break;
    case "php":
      document.body.style.background = "blue";
      break;
    case "python":
      document.body.style.background = "green";
      break;

    default:
      break;
  }
})