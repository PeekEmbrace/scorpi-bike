const copyrightYear = document.getElementById('copyright-year');
const currentYear = new Date().getFullYear();

copyrightYear.innerText = currentYear > 2021 ? `-${currentYear}` : '';