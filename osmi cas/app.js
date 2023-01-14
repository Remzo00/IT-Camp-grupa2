//function ime_Funkcije(prvi_Parametar, drugi){
// naredbe
// }

// ime_Funkcije(argument1, dva)

//Funkcija je blok koda koja izvrsava odredjenu radnju
//Funkcije definisemo jednom i koristimo na nivou celog programa
//Kod postaje kraci

//ES5 - stari nacin pisanja funckije
function sabiranje(a, b) {
  console.log(a + b);
}

const pozdrav = (ime, prezime) => {
  console.log("Pozdrav " + ime + prezime);
};

sabiranje(5, 10);
sabiranje(20, 30);
pozdrav("Mensure ", "Mavric");
pozdrav("Seide");

//ES6

//Arrow function
const mnozenje = () => {};
