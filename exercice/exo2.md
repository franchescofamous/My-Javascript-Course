Exercice:
Recuperer deux entrées de l'utilisateur sous forme de nombre. Vérifier si les deux entrées sont des nombres, ensuite additionné les entrées et affiché a l'utilisateur si le resultat est paire ou impaire.

/**\*\***/
Solution
let fstNum = Number(prompt("entrer le 1er numero:"));
let sndNum = Number(prompt("entrer le 2eme numero:"));
isNaN(fstNum);

if (!isNaN(fstNum) && !isNaN(sndNum)) {
let result = fstNum + sndNum;
result % 2 === 0
? alert("vous avez un nombre paire")
: alert("vous avez un nombre impaire");
} else {
alert("recharger la page et choisissez un nombre");
}

/**\***/
