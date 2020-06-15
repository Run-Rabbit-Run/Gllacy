let catalog = document.querySelector(".header__catalog");
let subMenu = document.querySelector(".header__navigation-sub-list");
let buttonSearch = document.querySelector(".header__button-search");
let inputSearch = document.querySelector(".header__search");
let loginButton = document.querySelector(".header__button--log-in");
let loginPopup = document.querySelector(".header__form");
let cartButton = document.querySelector(".header__button--cart");
let shopingCart = document.querySelector(".header__shoping-cart");
let catalogNavigation = document.querySelector(".catalog-navigation");


catalog.onmouseover = function () {
  subMenu.style.display = "inline-block";
  catalogNavigation.style.zIndex = "1";
}
catalog.onmouseout = function () {
  subMenu.style.display = "none";
  catalogNavigation.style.zIndex = "3";
}

buttonSearch.onmouseover = function () {
  inputSearch.style.display = "inline-block";
}
buttonSearch.onmouseout = function () {
  inputSearch.style.display = "none";
}
inputSearch.onmouseover = function () {
  inputSearch.style.display = "inline-block";
}
inputSearch.onmouseout = function () {
  inputSearch.style.display = "none";
}

loginButton.onmouseover = function () {
  loginPopup.style.display = "flex";
}
loginButton.onmouseout = function () {
  loginPopup.style.display = "none";
}
loginPopup.onmouseover = function () {
  loginPopup.style.display = "flex";
}
loginPopup.onmouseout = function () {
  loginPopup.style.display = "none";
}

cartButton.onmouseover = function () {
  shopingCart.style.display = "block";
}
cartButton.onmouseout = function () {
  shopingCart.style.display = "none";
}
shopingCart.onmouseover = function () {
  shopingCart.style.display = "block";
}
shopingCart.onmouseout = function () {
  shopingCart.style.display = "none";
}