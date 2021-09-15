const dataLowercase = "azertyuioplkjhgfdsqwxcvbn";
const dataUppercase = dataLowercase.toUpperCase();
const dataNumbers = "0123456789";
const dataSymbols = "$`&é\"'(§çèé)-ù^=+:;,?#";
//récupérer la valeur de ce qui est affiché à coté de l'input range
const rangeValue = document.getElementById("password-length");
const passwordOutput = document.getElementById("password-output");

const generatePassword = () => {
  let data = [];
  let password = "";
  // les ... pour séparer tous les éléments de chaque tableau
  if (lowercase.checked) data.push(...dataLowercase);
  if (uppercase.checked) data.push(...dataUppercase);
  if (numbers.checked) data.push(...dataNumbers);
  if (symbols.checked) data.push(...dataSymbols);

  if (data.length === 0) {
    alert("Veuillez selectionner des critères");
    return;
  }
  for (i = 0; i < rangeValue.value; i++) {
    password += data[Math.floor(Math.random() * data.length)];
  }
  // on ne peut pas insérer de textcontent ou de innerhtml sur un input
  passwordOutput.value = password;
  //sélectionner le texte
  //.select
  passwordOutput.select();
  //copier un élément
  //navigator.clipboard.writeText(passwordOutput.value);
  navigator.clipboard.writeText(passwordOutput.value);
  //afficher "Copié !" quand le mdp est copié
		
		generateButton.textContent = "Copié !";
  setTimeout(() => {
			generateButton.textContent = "Générer mot de passe";
  }, 2000);
};

generateButton.addEventListener("click", () => {
  generatePassword();
});
