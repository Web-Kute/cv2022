'use strict';

//Creation context and hoisting (hissage)
console.log(a);
var a = "Hello World";

function greet() {
    return console.log("WTF");
}
greet();

//ex: On appelle la fonction avant de la créer
nomChat("Chloé");

function nomChat(nom) {
    console.log("Le nom de mon chat est " + nom);
}

// Pendant la phase de création la fonction et la variable sont mises en mémoire
// Mais pas la valeur de la variable