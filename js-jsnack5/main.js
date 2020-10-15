//Stampa il cubo dei primi N numeri, dove N è un numero
//indicato dall’utente.

var numeri = [];

var numero1 = parseInt(prompt('Inserisci un numero'));
var numero2 = parseInt(prompt('Inserisci un numero'));
var numero3 = parseInt(prompt('Inserisci un numero'));
var numero4 = parseInt(prompt('Inserisci un numero'));

var cuboNumero1 = numero1 ** 3;
var cuboNumero2 = numero2 ** 3;
var cuboNumero3 = numero3 ** 3;
var cuboNumero4 = numero4 ** 3;

numeri.push(cuboNumero1);
numeri.push(cuboNumero2);
numeri.push(cuboNumero3);
numeri.push(cuboNumero4);

console.log(numeri);
