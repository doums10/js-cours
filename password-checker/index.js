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
};

generateButton.addEventListener("click", () => {
  generatePassword();
});
