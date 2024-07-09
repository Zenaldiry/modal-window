"use strict";

const modal = document.querySelectorAll(".modal");
const modalContent = document.querySelector(".modal-content");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".close");

modal.forEach((m) => {
  m.addEventListener("click", () => {
    modalContent.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
});

closeBtn.addEventListener("click", () => {
  modalContent.classList.add("hidden");
  overlay.classList.add("hidden");
});

overlay.addEventListener("click", () => {
  modalContent.classList.add("hidden");
  overlay.classList.add("hidden");
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    modalContent.classList.add("hidden");
    overlay.classList.add("hidden");
  }
});
