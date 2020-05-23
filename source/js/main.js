let catalog = document.querySelector(".header__catalog");
let subMenu = document.querySelector(".header__navigation-sub-list");
let buttonSearch = document.querySelector(".header__button-search");
let inputSearch = document.querySelector(".header__search");

catalog.onmouseover = function () {
  subMenu.classList.add("js-on");
}
catalog.onmouseout = function () {
  subMenu.classList.remove("js-on");
}

buttonSearch.onmouseover = function () {
  inputSearch.classList.add("js-on");
}
buttonSearch.onmouseout = function () {
  inputSearch.classList.remove("js-on");
}