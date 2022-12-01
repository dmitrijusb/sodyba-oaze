"use strict";

const currentDateTime = new Date();
const year = currentDateTime.getFullYear();
const month = currentDateTime.getMonth() + 1;
const date = currentDateTime.getDate() + 1;

if (date < 10) {
  date = "0" + date;
}
if (month < 10) {
  month = "0" + month;
}

const dateTomorrow = year + "-" + month + "-" + date;
const checkinElem = document.querySelector("#checkin-date");
const checkoutElem = document.querySelector("#checkout-date");

checkinElem.setAttribute("min", dateTomorrow);

checkinElem.onchange = function () {
  checkoutElem.setAttribute("min", this.value);
};
