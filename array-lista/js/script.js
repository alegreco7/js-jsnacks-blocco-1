// Fase 1: Creare l'array con la frutta del frigorifero
let frigorifero = ['banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola'];

// Fase 2: Aggiungere la pesca all'array della frutta
frigorifero.push('pesca');

// Fase 3: Verificare se nel frigorifero c'è il cocomero
let cocomeroPresente = false;

for (let frutto of frigorifero) {
    if (frutto === 'cocomero') {
        cocomeroPresente = true;
        break;
    }
}

// Stampare il risultato in base alla presenza del cocomero
if (cocomeroPresente) {
    console.log("Trovato! Devo solo preparare il cocktail.");
} else {
    console.log("Oh no, devo uscire a comprare il cocomero!");
}