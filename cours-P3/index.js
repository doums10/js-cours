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
    admin: true,
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

// -----------------------------------------------
// Méthode Numbers
// toFixed
// garder un nombre derrière la virgule ex 42,1456
// let number2 = 42.1456;
// console.log(number2.toFixed(2));
//result 42,15

//Math

//Math.round
// pour arrondir un chiffre
// console.log(Math.round(4.5));
//result 5

//Math.floor
//arrondir un chiffre au plus bas
// console.log(Math.floor(4.9));
//result 4

//Math.ceil
//arrondir un chiffre au plus haut
// console.log(Math.ceil(4.9));
//result 5

//Math.random
// chiffre entre 1 et 50
// console.log(Math.random() * 50);
//si l'on veut sans virgule
//  console.log(Math.floor(Math.random() * 50));

//--------------------------------------------------
// Méthodes Arrays

//Fusionner 2 tableaux
let array3 = ["Javascript", "Ruby", "Python", "Php"];
let array4 = ["Paris", "Bordeaux", "Miami"];

//Concat()
console.log(array3.concat(array4));

// Autre méthode
// Spread operator

let newArray = [...array3, ...array4];
console.log(newArray);

// Casser un tableau et insérer des choses à l'intérieur
//Join
// ajout d'un slash entre les éléments du tableau array3
console.log(array3.join("/"));
// result Javascript/Ruby/Python/Php

//Découper un élément du tableau
//Slice
console.log(array3.slice(2));
// result [("Python", "Php")];

// Avec 2 paramètres ex tu supprimes les 2 premiers éléments jusqu'au 5éme
console.log(newArray.slice(2, 5));
// affiche ceux qui sont entre le 2ème élément et le 5ème, les autres tu les enlèves

// Affiche les éléments d'un tableau
//ForEach
// à chaque tour de boucle, affiche moi l'élément
array3.forEach((languages) => {
  console.log(languages);
});

//Supprimer 1er élément
//Shift
console.log(array3.shift());
//Supprimer dernier  élément
// Pop
console.log(array3.pop());

// IMPORTANT //

// Additionner des éléments d'un tableau
let arrayNumber = [4, 10, 32, 65, 120];
console.log(arrayNumber.reduce((x, y) => x + y));

//Ajouter un élément
// console.log(arrayNumber.push(17));
// console.log(arrayNumber);
// result [(4, 10, 32, 65, 120, 17)];

// FILTER, SORT , MAP

// Filtrer les numéros du tableau supérieur à 10
// console.log(arrayNumber.filter((number) => (number)> 10));
// result[(32, 65, 120)];

//Trier par index, ex tous les chiffres avec 1 en premier, ensuite ceux avec 2, etc....
// console.log(arrayNumber.sort());
//result [10, 120, 32, 4, 65]

// Trier du plus petit au plus grand
console.log(arrayNumber.sort((a, b) => a - b));
//result [(4, 10, 32, 65, 120)];

// Afficher les éléments du tableau
arrayNumber.map((number) => console.log(number));
// => affiche des elements dans la console
// document.body.innerHTML += arrayNumber.map((number) => `<li>${number}</li>`);
// result chiffre avec une virgule entre chaque
// => pour supprimer les virgules
// document.body.innerHTML += arrayNumber
//   .map((number) => `<li>${number}</li>`)
//   .join("");

// -------------------------------------------
// Méthodes Objets

// les memes méthodes que les méthodes array
// Afficher les objets qui sont dans le tableau "data" ligne 27
document.body.innerHTML += data
//filtrer et afficher que ceux qui ont le statut admin sur false
.filter((user) => user.admin === false)
//trier par age
.sort((a, b) => a.age - b.age)
  .map(
    (user) => `<div class="user-card">
            <h2>${user.name}</h2>
            <p>Age : ${user.age}</p>
            <p>Status : ${user.admin ? "Modérateur" : "Membre"}</p>
              </div>`
  )
  .join("");
//result °Denis °Samia °Nikola en liste
