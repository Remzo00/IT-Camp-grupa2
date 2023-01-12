//Nestovati nizove: jednom nestovati deep, dva puta deeper, tri puta deepest
let myNestedArray = [
  ["unshift", false, 1, 2, 3, "complex", "nested"],
  ["loop", "shift", 6, 7, 1000, "method"],
  ["concat", false, true, "spread", "array", ["deep"]],
  ["mutate", 1327.98, "splice", "slice", "push", [["deeper"]]],
  ["iterate", 1.3849, 7, "8.4876", "arbitrary", "depth", [[["deepest"]]]],
];
[][[]][[[]]];

//Ukloniti prva dva elementa iz niza i zameniti ih sa DarkSalmon i BlanchedAlmond
let colors = [
  "DarkGoldenRod",
  "WhiteSmoke",
  "LavenderBlush",
  "PaleTurqoise",
  "FireBrick",
];

colors.splice(0, 2, "DarkSalmon", "BlanchedAlmond");

//Ispisati niz Learning to code is fun
let speadOut = ["to", "code"];
let full = ["Learning", ...speadOut, "is", "fun"];

for (let i = 0; i <= 10; i++) {
  if (i === 5) {
    break;
  }

  console.log(i);
}

for (let i = 0; i <= 10; i++) {
  if (i === 5) {
    continue;
  }

  console.log(i);
}

const niz = [10, 20, 30, 40, 50];
//for of je za nizove
for (let i of niz) {
  console.log(i);
}

//for in je za objekte

const objekat = { ime: "Matej", prezime: "Kevkic", godine: 14 };

for (let x in objekat) {
  console.log(x);
}
