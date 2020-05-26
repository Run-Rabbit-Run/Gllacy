let slides = document.querySelectorAll('.slider__item');
// let sliderButtons = document.querySelectorAll('.slider__toggle');

for (let i = 0; i < slides.length; i++) {
  let sliderButtons = slides[i].querySelectorAll('.slider__toggle');
  console.log(sliderButtons);
}