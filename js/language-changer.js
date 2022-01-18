(() => {
  const languageChangeWrapper = document.querySelector('.language-change');
  const languages = document.querySelectorAll('.languages li');
  const currentLanguage = document.getElementById('lang');

  const pageLanguage = window.location.pathname;

  languageChangeWrapper.addEventListener('click', () => {
    languageChangeWrapper.classList.toggle('active');
  });

  languages.forEach((language) => {
    const elementLang = language.getAttribute('data-lang')
    if(pageLanguage.includes(elementLang)) {
      language.classList.add('active');
      currentLanguage.innerText = elementLang.toUpperCase();
    }
  });

})();

