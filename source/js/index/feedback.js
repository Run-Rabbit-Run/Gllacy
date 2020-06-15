let feedbackButton = document.querySelector(".map__button");
let feedbackForm = document.querySelector(".feedback");
let feedbackClose = document.querySelector(".feedback__button-close");
let darkBackground = document.querySelector(".dark-background");

feedbackButton.onclick = function (evt) {
  evt.preventDefault();
  feedbackForm.style.display = "block";
  darkBackground.style.display = "block";
};

feedbackClose.onclick = function () {
  feedbackForm.style.display = "none";
  darkBackground.style.display = "none";
};

