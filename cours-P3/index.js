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
document.body.addEventListener("click", (e) => {
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
});

//Methodes String
//methode js = fonctions déjà codées

let string2 = "Javascript est un langage orienté objet";
// concaténer une chaine de caractères avec un nombre
// console.log(eval("1" + 2));

// changer string en number
// parseInt
// console.log(eval(parseInt("1") + 2));
//result 3

//connaitre la longueur d'un caractère
//length
// console.log(string2.length);
//pour obtenir la dernière lettre de string 2
//console.log(string2[string2.length -1]);

//Slice
//couper un nombre de caractères
// let newString = string2.slice(2);
// console.log(newString);
//couper plusieurs parties ex à partir de la 5ème lettre et jusqu'à la 17 ème
// let newString = string2.slice(5, 17);
// console.log(newString);

// Split
//découper des parties d'une chaine de caractères
// ex à chaque fois que tu vois un i, tu découpes et tu me les mets dans un tableau

// let newString = string2.split("i");
// console.log(newString);
// résultat ['Javascr', 'pt est un langage or', 'enté objet']

//TolowerCase
// mettre la chaine de caractères en minuscules
console.log(string2.toLowerCase());

//ToUpperCase
// mettre en majuscule
console.log(string2.toUpperCase());

//Replace
// pour remplacer un element dans la chaine de caractères
console.log(string2.replace("Javascript", "PHP"));
