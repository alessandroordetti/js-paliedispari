let word = prompt('Scegli una parola');

/* Verifichiamo che la parola sia una stringa e non un numero. Nel caso, il computer sceglie osso */
/* if ( typeOf(word) == Number) {
    alert('Il computer ha scelto per te la parola osso');
    word = "osso";
    console.log(word);
} */

while (word == "" || !isNaN(word) || word == null) {
    word = prompt('Scegli una parola');
}

console.log(word);

document.getElementById('paragraph').innerHTML = word;

function isPalindromo (word) {

    /* Word.lenght da a lettersCount il numero di volte che dovrà ripetere il ciclo for */
    let lettersCount = word.length;

    for (let i = 0; i < word.lenght; i++) {

        /* Se la lettera [0] è diversa dalla lettera [numero della lunghezza della parola - 1 - 0] allora la parola non è palindroma */
        if (word[i] !== word[lettersCount - 1 - i]) {
            console.log(word + " non è un nome palindromo");
            return 'non è un nome palindromo';
        } else {
            console.log(word + "è un nome palindromo");
        }
    }
    return ' non è un nome palindromo';
}

let newWord = isPalindromo(word);

document.getElementById('paragraph').innerHTML += ` : La parola ${newWord}`;




/* Seconda parte dell'esercizio */
const oddOrEven = prompt('Scegli tra pari e dispari').trim().toLowerCase();

while (oddOrEven !== "pari" && oddOrEven !== "dispari") {
    prompt('Scegli tra pari e dispari');
}

console.log(oddOrEven);


/* Funzione per checkare se il numero è dispari o pari */
function isOdd (number) {
    if (number % 2 === 1) {
        return true;
    }
    return false;
}

/* Funzione per far generare un numero random al computer */
function computerRandomNumber(minNum, maxNum) {
    return Math.floor(Math.random() * (maxNum - minNum) + minNum);
}

const computerNumber = computerRandomNumber(1, 5);

console.log(`Il numero scelto dal pc è: ` + computerNumber);


let userNumber = parseInt(prompt('Scegli un numero tra 1 e 5'));

while (isNaN(userNumber) || userNumber > 5 || userNumber < 1) {
    userNumber = parseInt(prompt('Scegli un numero tra 1 e 5'));
}

console.log(`Il numero scelto da te è: ` + userNumber);

function sum (userNum, computerNum) {
    return isOdd(userNum + computerNum);
}

if(oddOrEven == (sum(isOdd))) {
    console.log('Hai vinto!');
} else {
    console.log('Il computer ti ha battuto');
}

const sumUserAndComputerNumber = sum (userNumber, computerNumber);

console.log(sumUserAndComputerNumber);



