// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// MODO 1

const myNumber = Math.ceil(Math.random() * 6);
const pcNumber = Math.ceil(Math.random() * 6);
console.log(myNumber, pcNumber);

if (myNumber > pcNumber) {
    // alert("Hai vinto tu"); 
    console.log("Hai vinto tu.");

} else if (myNumber === pcNumber) {
    console.log("Avete Pareggiato.");
} else {
    // alert("Ha vinto il pc");
    console.log("Ha vinto il PC.");
}

// MODO 2

const possibiliRisultati = [1, 2, 3, 4, 5, 6];

