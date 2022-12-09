"use strict";

//////////////////////
///Rezervuoti button//
//////////////////////

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".nav-cta");

function toggleModal() {
  modal.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
}

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", toggleModal);
}

btnCloseModal.addEventListener("click", toggleModal);
overlay.addEventListener("click", toggleModal);

document.addEventListener("keydown", function (e) {
  if (!modal.classList.contains("hidden") && e.key === "Escape") toggleModal();
});

//////////////////////
///Form Date Format//
//////////////////////

let currentDateTime = new Date();
let year = currentDateTime.getFullYear();
let month = currentDateTime.getMonth() + 1;
let date = currentDateTime.getDate() + 1;

if (date < 10) {
  date = "0" + date;
}
if (month < 10) {
  month = "0" + month;
}

let dateTomorrow = year + "-" + month + "-" + date;
let checkinElem = document.querySelector("#checkin-date");
let checkoutElem = document.querySelector("#checkout-date");

checkinElem.setAttribute("min", dateTomorrow);

checkinElem.onchange = function () {
  checkoutElem.setAttribute("min", this.value);
};
