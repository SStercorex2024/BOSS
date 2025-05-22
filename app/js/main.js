const swiper = new Swiper(".accessories__slider", {
  slidesPerView: 3,
  centeredSlides: true,
  spaceBetween: 40,
  loop: true,

  navigation: {
    nextEl: ".accessories__arrow-next",
    prevEl: ".accessories__arrow-prev",
  },

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});
