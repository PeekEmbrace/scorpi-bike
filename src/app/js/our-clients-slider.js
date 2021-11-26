// eslint-disable-next-line no-undef,no-unused-vars
const swiper = new Swiper('.swiper  ', {
  slidesPerView: 'auto',
  centeredSlides: true,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.reviews-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});