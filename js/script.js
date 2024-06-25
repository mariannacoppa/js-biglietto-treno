// alert("Ci scusiamo per il disagio");
// Permetto l'inserimento da parte dell'utente del numero di km da percorrere
let km = prompt("Insrisci i km da percorrere nel tuo viaggio");
console.log("km");
// Permetto l'inserimento da parte dell'utente dell'età del passeggero
let eta = prompt("Inserisci la tua età");
console.log("età");
// Creo variabile a cui assegno come valore il prodotto tra il valore km ed il valore età
let prezzo = (km * 0.21);
let perc_sconto = 0;
let totale = prezzo * perc_sconto / 100;
// programmo gli sconti
if (eta < 18) {
    perc_sconto = 20;
}
else if (eta > 64) {
    perc_sconto = 40;
}
if (perc_sconto != 0) {
    // prezzo = prezzo * perc_sconto / 100;
    console.log(totale);
}
else if (perc_sconto == 0) {
    console.log(totale);
}