(() => {
  const languageChangeWrapper = document.querySelector('.language-change');
  const languages = document.querySelectorAll('.languages li');

  const pageLanguage = window.location.pathname;

  languageChangeWrapper.addEventListener('click', () => {
    languageChangeWrapper.classList.toggle('active');
  });

  languages.forEach((language) => {
    if(pageLanguage.includes(language.getAttribute('data-lang'))) {
      language.classList.add('active');
    }
  });

})();

