//Crea un array vuoto. Chiedi per 6 volte all’utente di inserire
//un numero, se è dispari inseriscilo nell’array.

var numeriDispari = [];

var numero1 = parseInt(prompt('Inserisci un numero'));
var numero2 = parseInt(prompt('Inserisci un numero'));
var numero3 = parseInt(prompt('Inserisci un numero'));
var numero4 = parseInt(prompt('Inserisci un numero'));
var numero5 = parseInt(prompt('Inserisci un numero'));
var numero6 = parseInt(prompt('Inserisci un numero'));

if (numero1 % 2 != 0) {
    numeriDispari.push(numero1);
}

if (numero2 % 2 != 0) {
    numeriDispari.push(numero2);
}

if (numero3 % 2 != 0) {
    numeriDispari.push(numero3);
}

if (numero4 % 2 != 0) {
    numeriDispari.push(numero4);
}

if (numero5 % 2 != 0) {
    numeriDispari.push(numero5);
}

if (numero6 % 2 != 0) {
    numeriDispari.push(numero6);
}

console.log(numeriDispari);
