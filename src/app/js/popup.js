const popupIcon = document.querySelector('.service-about-popup-icon');
const popupText = document.querySelector('.service-about-popup-text');
const popupClose = document.querySelector('.service-about-popup-close');

function togglePopUpText() {
  popupText.classList.toggle('is-open');
}

document.addEventListener('click', function(e) {
  // A bit hacky solution but if the link is pressed the target
  // is anchor tag and it can't catch the class properly, with parentNode
  // it always gets the parent because it always have popup in its class name
  const targetClass = e.target.parentNode.className;

  if (popupText.classList.contains('is-open') && !targetClass.includes('popup')) {
    togglePopUpText();
  }
});

popupIcon.addEventListener('click', function(e) {
  // Stop bubbling up so document event listener is not called when the popup is opened
  e.stopPropagation();
  togglePopUpText();
});

popupClose.addEventListener('click', function() {
  popupText.classList.remove('is-open');
});
