// alert("Ci scusiamo per il disagio");
// Permetto l'inserimento da parte dell'utente del numero di km da percorrere
let km = prompt("Insrisci i km da percorrere nel tuo viaggio");
console.log("km");
// Permetto l'inserimento da parte dell'utente dell'età del passeggero
let eta = prompt("Inserisci la tua età");
console.log("età");
// Creo variabile a cui assegno come valore il prodotto tra il valore km ed il valore età
let prezzo_base = km * 0.21;
// let prezzo_finale = prezzo_base * perc_sconto / 100;
let prezzo_finale = prezzo_base;
// programmo gli sconti
if (eta < 18) {
    let sconto = prezzo_base * 0.2;
    prezzo_finale = prezzo_base - sconto;
    // è la stessa cosa scrivere al posto delle due righe sopra: 
    // prezzo_finale = prezzo_finale * 0.8;
}
else if (eta > 64) {
    let sconto = prezzo_base * 0.4;
    prezzo_finale = prezzo_base - sconto;
    // prezzo_finale = prezzo_base * 0.6;
}
console.log(prezzo_finale);
// if (sconto != 0) {
//     // prezzo_base = prezzo_base * sconto / 100;
//     console.log(prezzo_finale);
// }
// else if (sconto == 0) {
//     console.log(prezzo_finale);
// }
// arrotondo il valore alla seconda cifra decimale
let finale = prezzo_finale.toFixed(2);
// recupero l'elemento html che contiene la stringa generata e gli assegno il valore della riga 11
document.getElementById("finale").innerText = finale;
