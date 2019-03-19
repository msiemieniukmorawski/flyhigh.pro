//open menu
document
  .querySelector(".header__navigation")
  .addEventListener("click", function() {
    document.querySelector(".menu__pimary").classList.toggle("open");
  });
//close menu
document.querySelector(".menu__close").addEventListener("click", function() {
  document.querySelector(".menu__pimary").classList.toggle("open");
});

(() => {
  //animation box in who we are section
  const controller = new ScrollMagic.Controller();
  new ScrollMagic.Scene({
    triggerElement: ".who"
  })
    .setClassToggle(".who__box", "who__box--animation")
    .addTo(controller);

  //set position close menu
  const humburger = document.querySelector(".navigation__humbaurger");
  const close = document.querySelector(".menu__close");
  let humburgerPosition = humburger.getBoundingClientRect();
  close.style.top = humburgerPosition.top + window.pageYOffset + 7 + "px";
  close.style.left = humburgerPosition.left + window.pageXOffset + "px";
  window.addEventListener("resize", () => {
    let humburgerPosition = humburger.getBoundingClientRect();
    close.style.top = humburgerPosition.top + window.pageYOffset + 7 + "px";
    close.style.left = humburgerPosition.left + window.pageXOffset + "px";
  });
  //init slider
  const siemaNav = document.querySelectorAll(".slider__nav__item");
  const mySiema = new Siema({
    selector: ".slider__wrapper",
    duration: 200,
    easing: "ease-out",
    perPage: 1,
    startIndex: 2,
    draggable: true,
    multipleDrag: true,
    threshold: 20,
    loop: true,
    onChange: function() {
      for (let i = 0; i < siemaNav.length; i++) {
        siemaNav[i].classList.remove("slider__nav__item--active");
      }
      siemaNav[this.currentSlide].classList.add("slider__nav__item--active");
    }
  });
  //navigation slider
  for (let i = 0; i < siemaNav.length; i++) {
    siemaNav[i].addEventListener("click", function() {
      for (let i = 0; i < siemaNav.length; i++) {
        siemaNav[i].classList.remove("slider__nav__item--active");
      }
      this.classList.add("slider__nav__item--active");
      mySiema.goTo(this.dataset.slider - 1);
    });
  }
  //autoplay slider
  setInterval(() => mySiema.next(), 3000);
})();
