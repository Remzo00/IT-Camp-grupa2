//Treba da imate pocetnu vrednost 0
// Tri funckije, tj addEventListener koja uvecava, umanjuje i resetuje
//BONUS: Kad je pozitivan broj da bude u zelenoj boji, negativan u crvenoj

//innerText/innerHTML  textContent

const count = document.getElementById("count");
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");
const resetButton = document.getElementById("reset");

let counter = 0;

incrementButton.addEventListener("click", function () {
  counter++;
  count.innerHTML = counter;

  if (counter > 0) {
    count.style.color = "green";
  }
});

decrementButton.addEventListener("click", function () {
  counter--;
  count.innerHTML = counter;
  
  if (counter < 0) {
    count.style.color = "red";
  }
});

resetButton.addEventListener("click", function () {
  counter = 0;
  count.innerHTML = counter;

  if (counter === 0) {
    count.style.color = "#222";
  }
});


