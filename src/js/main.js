document
  .querySelector(".header__navigation")
  .addEventListener("click", function() {
    document.querySelector(".menu__pimary").classList.toggle("open");
  });

document.querySelector(".menu__close").addEventListener("click", function() {
  document.querySelector(".menu__pimary").classList.toggle("open");
});

(() => {
  const humburger = document.querySelector(".navigation__humbaurger");
  const close = document.querySelector(".menu__close");
  let humburgerPosition = humburger.getBoundingClientRect();
  close.style.top = humburgerPosition.top + window.scrollY + 7 + "px";
  close.style.left = humburgerPosition.left + window.scrollX + "px";
  window.addEventListener("resize", evt => {
    let humburgerPosition = humburger.getBoundingClientRect();
    close.style.top = humburgerPosition.top + window.scrollY + 7 + "px";
    close.style.left = humburgerPosition.left + window.scrollX + "px";
  });
})();
