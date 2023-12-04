/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log('Esercizio 1');

function area(l1, l2) {
  let result = l1 * l2;
  return result;
}
console.log(area(5, 12));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('Esercizio 2');

function crazySum(num1, num2) {
  let sum = num1 + num2;
  if (num1 === num2) {
    return sum * 3;
  } else {
    return sum;
  }
}
console.log(crazySum(2, 3));
console.log(crazySum(2, 2));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('Esercizio 3');

function crazyDiff(num3) {
  let diff = Math.abs(num3 - 19);  
  if (num3 > 19) {
    return diff * 3;
  } else {
    return diff;
  }
}
console.log(crazyDiff(15));
console.log(crazyDiff(22));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('Esercizio 4');

function boundary(n) {
  if ((n >= 20 && n<= 100) || n == 400) {
    return true;
  } else {
    return false;
  }
}
console.log(boundary(20));
console.log(boundary(60));
console.log(boundary(100));
console.log(boundary(10));
console.log(boundary(400));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('Esercizio 5');

function epify(string) {
  if (string.startsWith('Epicode')) {
    return string;
  } else {
    return 'Epicode' + '. ' + string
  }
}
console.log(epify('You are awesome!'));
console.log(epify('Epicode is awesome!'));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('Esercizio 6');

function check3and7(num4) {
  if (num4 > 0 && (num4 % 3 === 0 || num4 % 7 === 0)) {
    return true;
  } else {
    return false;
  }
}
console.log(check3and7(21));
console.log(check3and7(12));
console.log(check3and7(14));
console.log(check3and7(13));
console.log(check3and7(-2));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('Esercizio 7');

function reverseString(string) {
  return string.split('').reverse().join('');
}
console.log(reverseString('Epicode'));
console.log(reverseString('Epicode is awesome'));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('Esercizio 8');

function upperFirst(string) {
  const splitStr = string.split(" ");
  const words = [];

  for (let i = 0; i < splitStr.length; i++) {
    const word = splitStr[i];
    const firstChar = word.charAt(" ").toUpperCase();
    const lastChar = word.substring(1);
    const fullWord = firstChar + lastChar;
    words.push(fullWord);
  }
  return words.join(" ");
}
console.log(upperFirst('epicode is awesome'));
console.log(upperFirst('hello world!'));
/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('Esercizio 9');

function cutString(string) {
  return string.substring(1, string.length - 1);
}
console.log(cutString('Epicode is awesome'));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log('Esercizio 10');

function giveMeRandom(n) {
  const randomNumbers = [];

  for (let i = 0; i < n; i++) {
    const randomNumber = Math.floor(Math.random() * 11);
    randomNumbers.push(randomNumber);
  }
  return randomNumbers;
}
const result = giveMeRandom(10);
console.log(result);