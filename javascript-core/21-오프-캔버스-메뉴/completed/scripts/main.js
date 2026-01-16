const body = document.body;
const offsiteContainer = document.querySelector(".offsite-container");
const button = document.querySelector(".button");

button.addEventListener("click", () => {
  body.classList.toggle("move");
  offsiteContainer.classList.toggle("move");
});

//getEventListener
//DOMContentLoaded
