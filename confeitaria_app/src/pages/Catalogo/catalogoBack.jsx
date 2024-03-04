const openModal = document.querySelector("#open-modal");
const closeModalButton = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

const toggleModal = () => {
  modal.classList.toggle("hide");
  fade.classList.toggle("hide");
};

[openModal, closeModalButton, fade].forEach((el) => {
  el.addEventListener("click", () => console.log('teste'));
});
