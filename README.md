Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). 

1 Permetto l'inserimento da parte dell'utente del numero di km da percorrere
2 Permetto l'inserimento da parte dell'utente dell'età del passeggero
3 Creo variabile a cui assegno come valore il prodotto tra il valore km ed il valore età
4 IF l'età è < 18 anni
5 : sconto del 20% sul prezzo
6 ELSE IF età > 65 anni
7 : sconto del 40% sul prezzo
8 ELSE Non si ha diritto ad alcuno sconto
9 Arrotondo il valore del punto 3 alla seconda cifra decimale