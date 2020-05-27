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
let sliderButtons1 = document.querySelectorAll('.js-slider-button-1');
let sliderButtons2 = document.querySelectorAll('.js-slider-button-2');
let sliderButtons3 = document.querySelectorAll('.js-slider-button-3');
let slide1 = document.querySelector('.slider__item--1');
let slide2 = document.querySelector('.slider__item--2');
let slide3 = document.querySelector('.slider__item--3');
let slides = document.querySelectorAll('.slider__item');
let body = document.querySelector('body');



for (let sliderButton1 of sliderButtons1) {

  sliderButton1.onclick = function () {

    for (let slide of slides) {
      slide.style.display = 'none';
    }
    
    body.style.backgroundColor = '#849d8f';
    slide1.style.display = 'flex';
  }
}

for (let sliderButton2 of sliderButtons2) {

  sliderButton2.onclick = function () {

    for (let slide of slides) {
      slide.style.display = 'none';
    }
    
    body.style.backgroundColor = '#8996a6';
    slide2.style.display = 'flex';
  }
}

for (let sliderButton3 of sliderButtons3) {

  sliderButton3.onclick = function () {

    for (let slide of slides) {
      slide.style.display = 'none';
    }
    
    body.style.backgroundColor = '#9d8b84';
    slide3.style.display = 'flex';
  }
}
