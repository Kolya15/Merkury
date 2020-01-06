let btnDropMenu = document.querySelector(".btn__drop-menu");
let wrapperDropMenu = document.querySelector(".wrapper__drop-menu");
let wrapperDropMenuActive = document.querySelector(
  ".wrapper__drop-menu_active"
);

btnDropMenu.addEventListener("click", function() {
  wrapperDropMenu.classList.toggle("wrapper__drop-menu_active");
});
