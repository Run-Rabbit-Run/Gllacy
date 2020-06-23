let catalog = document.querySelector(".header__catalog");
let subMenu = document.querySelector(".header__navigation-sub-list");
let buttonSearch = document.querySelector(".header__button-search");
let inputSearch = document.querySelector(".header__search");
let loginButton = document.querySelector(".header__button--log-in");
let loginPopup = document.querySelector(".header__form");
let cartButton = document.querySelector(".header__button--cart");
let shopingCart = document.querySelector(".header__shoping-cart");
let catalogNavigation = document.querySelector(".catalog-navigation");
let main = document.querySelector(".main");
let fullCart = document.querySelector(".header__button--full-cart");
let fullCartIcon = document.querySelector(".header__button--full-cart-icon");
let fullCartPopup = document.querySelector(".header__shoping-cart");


if (fullCart) {
  fullCartIcon.style.display = "block";
  fullCart.style.pointerEvents = "auto";
} else {
  fullCartIcon.style.display = "none";
}

fullCart.onmouseover = function () {
  fullCartPopup.style.display = "inline-block";
  main.style.zIndex = "1";
}
fullCart.onmouseout = function () {
  fullCartPopup.style.display = "none";
  main.style.zIndex = "auto";
}

catalog.onmouseover = function () {
  subMenu.style.display = "inline-block";
  catalogNavigation.style.zIndex = "1";
}
catalog.onmouseout = function () {
  subMenu.style.display = "none";
  catalogNavigation.style.zIndex = "2";
}

buttonSearch.onmouseover = function () {
  inputSearch.style.display = "inline-block";
  main.style.zIndex = "1";
}
buttonSearch.onmouseout = function () {
  inputSearch.style.display = "none";
  main.style.zIndex = "auto";
}
inputSearch.onmouseover = function () {
  inputSearch.style.display = "inline-block";
  main.style.zIndex = "1";
}
inputSearch.onmouseout = function () {
  inputSearch.style.display = "none";
  main.style.zIndex = "auto";
}

loginButton.onmouseover = function () {
  loginPopup.style.display = "flex";
  main.style.zIndex = "1";
}
loginButton.onmouseout = function () {
  loginPopup.style.display = "none";
  main.style.zIndex = "auto";
}
loginPopup.onmouseover = function () {
  loginPopup.style.display = "flex";
  main.style.zIndex = "1";
}
loginPopup.onmouseout = function () {
  loginPopup.style.display = "none";
  main.style.zIndex = "auto";
}

cartButton.onmouseover = function () {
  shopingCart.style.display = "block";
  main.style.zIndex = "1";
}
cartButton.onmouseout = function () {
  shopingCart.style.display = "none";
  main.style.zIndex = "auto";
}
shopingCart.onmouseover = function () {
  shopingCart.style.display = "block";
  main.style.zIndex = "1";
}
shopingCart.onmouseout = function () {
  shopingCart.style.display = "none";
  main.style.zIndex = "auto";
}