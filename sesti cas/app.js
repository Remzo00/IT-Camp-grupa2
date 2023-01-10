// let a = 1;
// let b = "1";

// console.log(a != b);

//!= proverava samo vrednost
//!== proverava i tip i vrednost

//PETLJE

//Pogresno
console.log("Hello");
console.log("Hello");
console.log("Hello");
console.log("Hello");
console.log("Hello");
console.log("Hello");
console.log("Hello");
console.log("Hello");
console.log("Hello");
console.log("Hello");

//for
//while

// for (inicijalnaVrednost; uslov; brojac) {

// }

//Uvecava
for (let i = 1; i <= 10; i++) {
  console.log("Hello world", i);
}

//Umanjuje
for (let i = 10; i >= 1; i--) {
  console.log("Hello world", i);
}

// while(uslov){
//     //brojac
// }

let text = "";
let i = 0;

while (i < 10) {
  console.log((text += "Hello world " + i));
  i++;
}

//Pronaci brojeve koji su deljivi sa 2. Petlja pocinje od 1 i zavrsava do 10

for (let i = 1; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}
