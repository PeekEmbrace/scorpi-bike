// eslint-disable-next-line no-unused-vars
function initSwiper() {
  // eslint-disable-next-line no-undef
  new Swiper('.swiper  ', {
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
}