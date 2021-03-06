// Menu
var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");

navMain.classList.remove("main-nav--nojs");

navToggle.addEventListener("click", function () {
  navMain.classList.toggle("main-nav--opened");
  navToggle.blur();
});

// Form modals
var form = document.querySelector(".form");
var modalFailure = document.querySelector(".modal--failure");
var modalSuccess = document.querySelector(".modal--success");

var modalCloseBtn;

if (form) {
  form.addEventListener(
    "invalid",
    () => {
      modalFailure.classList.add("modal--opened");

      modalCloseBtn = modalFailure.querySelector(".modal__button-container");
      modalCloseBtn.addEventListener("click", function (e) {
        e.preventDefault();
        modalFailure.classList.remove("modal--opened");
      });

      window.addEventListener("keydown", function (e) {
        if (e.key === "Escape") {
          e.preventDefault();
          modalFailure.classList.remove("modal--opened");
        }
      });
    },
    true
  );

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    modalSuccess.classList.add("modal--opened");

    modalCloseBtn = modalSuccess.querySelector(".modal__button-container");
    modalCloseBtn.addEventListener("click", function (e) {
      e.preventDefault();
      modalSuccess.classList.remove("modal--opened");
    });

    window.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        e.preventDefault();
        modalSuccess.classList.remove("modal--opened");
      }
    });
  });
}
