// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

const emailContainer = ["email1", "email2", "email3"];
let utenteEsiste = true;
const richiestaEmail = prompt("Inserisci la tua email:");

for (let i = 0; i < emailContainer.length; i++) {
    const emailCorrente = emailContainer[i];
    if (emailCorrente === richiestaEmail) {
        utenteEsiste = true;
        alert("Utente Trovato");
    }
    if (!emailCorrente === richiestaEmail) {
        utenteEsiste = false;
        alert("Utente Non trovato");
    }
}
