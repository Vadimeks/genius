const modal = document.querySelector(".backdrop");
const modalBtnOpen = document.querySelector(".modal-open-button");
const modalBtnClose = document.querySelector(".modal-close-button");

const toggleModal = () => modal.classList.toggle("is-hidden");

modalBtnOpen.addEventListener("click", toggleModal);
modalBtnClose.addEventListener("click", toggleModal);
