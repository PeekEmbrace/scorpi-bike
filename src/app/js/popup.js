const popupIcon = document.querySelector('.service-about-popup-icon');
const popupText = document.querySelector('.service-about-popup-text');
const popupClose = document.querySelector('.service-about-popup-close');

popupIcon.addEventListener('click', function() {
  popupText.classList.toggle('is-open');
});

popupClose.addEventListener('click', function() {
  popupText.classList.remove('is-open');
});
