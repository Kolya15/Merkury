// Выпадающий список
let btnDropMenu = document.querySelector(".btn__drop-menu");
let wrapperDropMenu = document.querySelector(".wrapper__drop-menu");
let wrapperDropMenuActive = document.querySelector(
  ".wrapper__drop-menu_active"
);

btnDropMenu.addEventListener("click", function() {
  wrapperDropMenu.classList.toggle("wrapper__drop-menu_active");
});

//Скрол навигации
const anchors = document.querySelectorAll("a.scroll-to");

for (let anchor of anchors) {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    wrapperDropMenu.classList.remove("wrapper__drop-menu_active");
    const blockID = anchor.getAttribute("href");
    wrapperDropMenu.classList.remove("wrapper__drop-menu_active");
    document.querySelector(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
}
