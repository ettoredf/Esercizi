/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
 //due variabili da confrontare (if else if else) console
*/

var num1 = 10;
var num2 = 15;
if(num1 > num2){
  console.log("num1 è maggiore di num2");
}else if(num1 < num2){
  console.log("num1 è minore di num2");
}

/* +++++++++++++++ correzione ++++++++++++++++++  
let x = 4;
let y = 7;
if(x > y) {
  console.log('il numero più grande è', x);
} else if (x < y) {
  console.log('il numero più grande è', y);
} else {
  console.log('i numeri sono uguali')
}
*/

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
  una variabile not equal => !==
*/

var num3 = 5;
var num4 = 9;
if(num4 !== num3){
  console.log("num4 not equal num3");
}

/* +++++++++++++++ correzione ++++++++++++++++++  
let x1 = 7;
if(x1 !==5){
  console.log('not equal');
}
*/

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
  // divisibile => resto%
*/

var num5 = 5;
var num6 = 20;
if(num6 / num5){
  console.log("num6 è divisibile per 5");
}

/* +++++++++++++++ correzione ++++++++++++++++++  
let x2 = 15;
if (x2 % 5 === 0){
  console.log('divisibile per 5');
}
*/

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
  //if (serie di condizioni if => la verifica === )
*/

var num7 = 8;
var num8 = 0;
if(num7 == 8)

/* +++++++++++++++ correzione ++++++++++++++++++ 
let y1 = 10;
let y2 = 2;
if (y1 === 8 || y2 === 8 || y1 + y2 === 8 || y1 - y2 === 8){
  console.log('verificato');
}
*/


/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
  // dichiarerò 3 variabili: totale, costo, pagamento=totale => if => se un valore è sopra/inferiore una soglia
*/

var totale1 = 50;
var costo1 = 50;
var pagamento1 = totale1;
if(pagamento1 < costo1){
  console.log("aggiungi altro al carrello per non pagare la spedizione");
} else if(pagamento1 >= costo1){
  console.log("hai diritto alla spedizione gratuita!");
}

/* +++++++++++++++ correzione ++++++++++++++++++ 
var totalShoppingCart = 65;
let shippingCost = 10;
let amountToPay = totalShoppingCart;

if (totalShoppingCart < 50) {
  amountToPay += shippingCost
}
console.log('Totale da pagare:', amountToPay);
*/

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
  //simile a quello sopra (sconto * 0.8)
*/

var prodotto2 = 30;
var prodotto3 = 20;
var sconto2 = 0.8;
var totale2 = (prodotto2*sconto2) + (prodotto3*sconto2);
var costo2 = 50;
var pagamento2 = totale2;
if(pagamento2 < costo2){
  console.log("aggiungi altro al carrello per non pagare la spedizione");
} else if(pagamento2 >= costo2){
  console.log("hai diritto alla spedizione gratuita!");
}

/* +++++++++++++++ correzione ++++++++++++++++++
let totalShoppingCart = 65;
totalShoppingCart2 = totalShoppingCart * 0.8;
let shippingCost2 = 10;
let amountToPay2 = totalShoppingCart2;
if(totalShoppingCart2 < 50) {
  let amountToPay2 += shippingCost2
}
console.log('Totale da pagare:',amountToPay2);
*/

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
  // annido una serie di if => controllo tutte le varie condizioni e con la console stampo la condizione (quando true)
*/

var num9 = 8;
var num10 = 3;
var num11 = 7;

/* +++++++++++++++ correzione ++++++++++++++++++

*/

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
  // typeof => if else
*/

var num12 = 8;
if(typeof num12){

}
/* +++++++++++++++ correzione ++++++++++++++++++
let test = 'ciao';
if (typeof test === 'number') {
  console.log('è un numero')
} else {
  console.log('è una stringa)
}
*/

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
  // modulo di 2 (%2) => if else
*/

var num13 = 2;

/* +++++++++++++++ correzione ++++++++++++++++++
let test2 = 31
if(test2 % 2 === 0) {
  console.log('è un numero pari')
} else {
  console.log('è un numero dispari')
}
*/

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

let val = 7;
if (val < 5) {
    console.log("Meno di 5");
  } else if (val < 10) {
    console.log("Meno di 10");
  } else {
    console.log("Uguale a 10 o maggiore");
  }

/* +++++++++++++++ correzione ++++++++++++++++++
  let val = 7
if (val < 5) {
  console.log("Meno di 5");
} else if (val < 10) {
  console.log("Meno di 10");
} else {
  console.log("Uguale a 10 o maggiore");
}
*/

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
  //ricordatevi che siamo dentro un oggetto => aggiungo qualcosa (una proprietà) all'oggetto
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* +++++++++++++++ correzione ++++++++++++++++++
me.city = "Toronto";
console.log(me)
*/


/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
  // posso cancellare
*/

/* +++++++++++++++ correzione ++++++++++++++++++
delete me.LastName;
console.log(me)
*/

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
  // metodi array =>  rimuovere l'ultimo elemento
*/

/* +++++++++++++++ correzione ++++++++++++++++++
me.skills,pop()
console.log(me)
*/

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
  // metodo array => inserire qualcosa nell'array
*/

var myArray = []
myArray.push(1);
myArray.push(2);
myArray.push(3);
myArray.push(4);
myArray.push(5);
myArray.push(6);
myArray.push(7);
myArray.push(8);
myArray.push(9);
myArray.push(10);
console.log(myArray);

/* +++++++++++++++ correzione ++++++++++++++++++
let myArray = []
myArray.push(1)
myArray.push(2);
myArray.push(3);
myArray.push(4);
myArray.push(5);
myArray.push(6);
myArray.push(7);
myArray.push(8);
myArray.push(9);
myArray.push(10); // posso anche inserirli una volta separati da virgole => myArray.push (1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
console.log(myArray)
*/

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
  // selezionare il nono elemento e assegnare un nuovo valore
*/

abc = myArray [9];
abc = 100;

/* +++++++++++++++ correzione ++++++++++++++++++
myArray [9] = 100;
console.log(myArray)
*/