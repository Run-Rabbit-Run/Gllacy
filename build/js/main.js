let catalog = document.querySelector(".header__catalog");
let subMenu = document.querySelector(".header__navigation-sub-list");
let buttonSearch = document.querySelector(".header__button-search");
let inputSearch = document.querySelector(".header__search");
let loginButton = document.querySelector(".header__button--log-in");
let loginPopup = document.querySelector(".header__form");
let cartButton = document.querySelector(".header__button--cart");
let shopingCart = document.querySelector(".header__shoping-cart");


catalog.onmouseover = function () {
  subMenu.style.display = "inline-block";
}
catalog.onmouseout = function () {
  subMenu.style.display = "none";
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
let slides = document.querySelectorAll('.slider__item');
// let sliderButtons = document.querySelectorAll('.slider__toggle');

for (let i = 0; i < slides.length; i++) {
  let sliderButtons = slides[i].querySelectorAll('.slider__toggle');
  console.log(sliderButtons);
}