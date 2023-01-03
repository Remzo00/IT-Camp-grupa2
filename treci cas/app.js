const cars = ["bmw", "audi", "vw"];
cars.slice(1, 3);
console.log(cars);

const brojevi = [1, 2];
const brojevi1 = [...brojevi, 3, 4];
console.log();

//Metode za rad sa nizovima
//1.push -> sluzi nam da ubacimo element na kraj niza
//2.unshift -> sluzi nam da ubacimo element na pocetak niza
//3.pop -> sluzi nam da brisemo element na kraj niza
//4.shift -> sluzi nam da obrisemo element na pocetak niza
//5.slice -> ne menja niz i vraca samo selektovane elemente
//6.splice -> menja niz, brise selektovane elemente i dodaje nove
//7.Spread operator(...) -> pravi kopiju postojeceg niza

//formula za slice
//slice(start, end)

// {} -> oznacava objekat
// [] -> oznacava niz
// () -> poziva metodu
