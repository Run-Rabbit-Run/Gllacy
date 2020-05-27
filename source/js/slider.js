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
