function verifyOddOrEven(number) {
  if (number % 2 === 0) {
    return "paire";
  } else {
    return "impaire";
  }
}

function Multiplication(numOne, numTwo) {
  let result = numOne * numTwo;
  let parite = verifyOddOrEven(result);

  return `l'operation de ${numOne} * ${numTwo}  donne: ${result} qui est un nombre ${parite}  `;
}
function division(numOne, numTwo) {
  let result = numOne / numTwo;
  let parite = verifyOddOrEven(result);

  return `l'operation de ${numOne} / ${numTwo}  donne: ${result} qui est un nombre ${parite}  `;
}

alert("Bienvenue dans notre application de calcul arithmetique");

let choosedOperation = Number(
  prompt("Veuillez choisir l'operation a éfectué: 1-Multiplication 2-division")
);
while (choosedOperation !== 1 && choosedOperation !== 2) {
  choosedOperation = Number(
    prompt("Veuillez  éfectuer un entrée parmis: 1-Multiplication 2-division")
  );
}

let firstEntry = Number(prompt("Veuillez  choisir votre 1er nombre :"));
let scndEntry = Number(prompt("Veuillez choisir votre 2eme nombre :  "));

while (isNaN(firstEntry) || isNaN(scndEntry)) {
  firstEntry = Number(
    prompt("Veuillez recommencer, et choisissez votre 1er nombre :")
  );
  scndEntry = Number(
    prompt("Veuillez recommencer,et choisissez votre 2eme nombre :  ")
  );
}

switch (choosedOperation) {
  case 1:
    alert(Multiplication(firstEntry, scndEntry));
    break;
  case 2:
    alert(division(firstEntry, scndEntry));
    break;
}
