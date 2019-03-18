"use strict";

document.querySelector(".header__navigation").addEventListener("click", function () {
  document.querySelector(".menu__pimary").classList.toggle("open");
});

document.querySelector(".menu__close").addEventListener("click", function () {
  document.querySelector(".menu__pimary").classList.toggle("open");
});

(function () {
  var humburger = document.querySelector(".navigation__humbaurger");
  var close = document.querySelector(".menu__close");
  var humburgerPosition = humburger.getBoundingClientRect();
  close.style.top = humburgerPosition.top + window.scrollY + 7 + "px";
  close.style.left = humburgerPosition.left + window.scrollX + "px";
  window.addEventListener("resize", function (evt) {
    var humburgerPosition = humburger.getBoundingClientRect();
    close.style.top = humburgerPosition.top + window.scrollY + 7 + "px";
    close.style.left = humburgerPosition.left + window.scrollX + "px";
  });
})();