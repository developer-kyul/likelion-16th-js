const modalOpenButton = document.querySelector(".modal-open-button");
const modalCloseButton = document.querySelector(".modal-close-button");
const modalOverlay = document.querySelector(".modal-overlay");

console.log(modalOpenButton);
console.log(modalCloseButton);
console.log(modalOverlay);

modalOpenButton.addEventListener("click", () => {
  modalOverlay.classList.add("is-open");
});

modalCloseButton.addEventListener("click", () => {
  modalOverlay.classList.remove("is-open");
});
