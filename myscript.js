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

    for (let i = 0; i < lettersCount; i++) {
        if (word[i] !== word[lettersCount - 1 - i]) {
            console.log(word + " non è un nome palindromo");
            return 'non è nome palindromo';
        } else {
            console.log(word + "è un nome palindromo");
        }
    }
    return ' è un nome palindromo';
}

let newWord = isPalindromo(word);

document.getElementById('paragraph').innerHTML += ` : La parola ${newWord}`


