(() => {
  const languageChangeWrapper = document.querySelector('.language-change');

  languageChangeWrapper.addEventListener('click', () => {
    languageChangeWrapper.classList.toggle('active');
  });
})();

