// Chiediamo all'utente quanti elementi dovrà contenere l'array
const numeroElementi = parseInt(prompt("Inserisci il numero di elementi dell'array:"));

// Creiamo un array con numeri casuali compresi tra 1 e 100
let arrayCasuale = [];
for (let i = 0; i < numeroElementi; i++) {
    arrayCasuale.push(Math.floor(Math.random() * 100) + 1);
}

// Chiediamo all'utente quanti elementi dell'array voglia stampare (bonus)
const numeroElementiDaStampare = parseInt(prompt("Quanti elementi dell'array vuoi stampare?"));
if (numeroElementiDaStampare > numeroElementi) {
    console.log("Errore: il numero di elementi da stampare non può essere maggiore del numero totale di elementi dell'array.");
}