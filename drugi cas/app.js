var a = 10;
var b = "10";
console.log(a === b);

//LOGICKI OPERATORI
// = dodeljuje vrednost
// == proverava samo vrednosti
// === proverava i tip i vrednost

//SLOZENE TIPOVE PODATAKA
//Slozeni tipovi podataka primaju vise tipova

//Objekti nam sluze da smestimo vise podataka u jednoj varijabli
var osobaa = {
  ime: "Mensur",
  godine: 20,
  zaposlen: true,
  ozenjen: false,
};
console.log(osobaa.ime + " " + osobaa.godine); //pristup objektu
//Nizovi
var osoba = [1, 3, 5, 3, 1]; //Elementi niza
//Niz krece od 0
var cars = [];
cars[0] = "bmw";
cars[1] = "audi";

console.log(cars);
//Funkcije
