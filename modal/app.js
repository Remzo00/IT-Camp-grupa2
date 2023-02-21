const modal = document.getElementById("modal");
const modalButton = document.getElementById("modal-button");
const modalCloseButton = document.querySelector(".close");

modalButton.addEventListener("click", function() {
  modal.style.display = "block";
});

modalCloseButton.addEventListener("click", function() {
  modal.style.display = "none";
});