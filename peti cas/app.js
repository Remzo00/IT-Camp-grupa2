//Logicni operatori to su operatori koji vracanju dve vrednosti(true-false) i kontrolisu tok naseg programa

//Sintaksa
//if
//else if
//else
//switch

// if (uslov) {
//   //output
// }

let prviBroj = 5;
let drugiBroj = 10;

if (prviBroj > drugiBroj) {
  console.log(true);
} else {
  console.log(false);
}

let mesec = 6;

//Nije dobra praksa
if (mesec === 1) {
  console.log("Januar");
} else if (mesec === 2) {
  console.log("Februar");
} else {
  console.log("Jun");
}

switch (mesec) {
  case 1:
    console.log("Junuar");
    break;
  case 2:
    console.log("Februar");
    break;
  case 3:
    console.log("Mart");
    break;
  case 4:
    console.log("April");
    break;
  case 5:
    console.log("Maj");
    break;
  case 6:
    console.log("Jun");
    break;
  default:
    console.log("Ne postoji taj mesec");
}
