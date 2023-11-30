/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* Javascript ha 5 tipi di dati di base e sono: numeri, stringhe, booleani, null e undefined. Ognuno ha un particolare significato.
I dati numerici si usano per scrivere dati che indicano numeri, che siano interi, decimali e negativi. E per scriverli correttamente non c'e bisogno di
utilizzare gli apici ("" o ''). Ed infine c'è un valore speciale, NaN (not a number), che viene utilizzato per indicare un valore numerico non definito.
Poi vi sono le stringhe, cioè una sequenza di caratteri che vengono racchiuse all'interno di apici doppi ("") o singoli (''), e ciò dipende dal contenuto
della stringa. Un'esempio è se voglio scrivere queste parole: l'altro ieri, sarò costretto ad utilizzare gli apici doppi per delimitare la stringa in questione,
in questo modo:  "l'altro ieri". E' possibile anche creare una stringa vuota, semplicemente aprendo e chiudendo gli apici, così: "" o ''. Una regola importante
èche gli apici di apertura e chiusura devono gli stessi.
Un altro tipo è chiamato booleano, che ha due tipi di dati, ovvero true (vero) | false (falso).
Dopo c'è il dato null, scritto in questo modo var x = null, è da precisare che null è un dato a sè stante, siccome verrebbe da pensare che è uguale a 0 ad una 
stringa vuota.
L'ultimo dato base è chiamato undefined, che come dice il nome sta ad indicare un valore che non esiste, nemmeno null, e non ha valori assegnati.
Però c'è anche un altro ultimo dato, che diversamente dai precedenti è definito complesso: gli oggetti, in cui possono essere proprietà (che sia un attributo o
  un valore) e/o metodi (funzioni)
*/

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const name="Ettore";
// console.log(name);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let numero1 = 12;
let numero2 = 20;
console.log(numero1 + numero2) // 32

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

var x = 12;
console.log(x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// name = "Di Francesco";
// console.log(name);
// Uncaught TypeError: Assignment to constant variable.
//     at D1.js:66:6

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log(4 - x);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// var name1 = "john";
// var name2 = "John";
// console.log(name1 == name2); /* console.log('name1 e name2 sono uguali:', name1 === name2); */
// var result=name1.toLowerCase();
// var result=name2.toLowerCase();
// console.log(name1 == name2); /* console.log('name1 e name2 in lowercase sono uguali:', name1.toLowerCase() === name2.toLowerCase()) */
let name1 = 'john';
let name2 = 'John';
console.log('name1 e name2 sono uguali:', name1 === name2);
console.log('name1 e name2 in loweercase sono uguali:', name1.toLowerCase() === name2.toLowerCase());