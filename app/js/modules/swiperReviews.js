function swiperReviews() {
  const swiper = new Swiper(".reviews__slider", {

    slidesPerView: 8.5,
    centeredSlides: true,

    spaceBetween: 16,
    loop: true,

    navigation: {
      nextEl: ".reviews__arrow-next",
      prevEl: ".reviews__arrow-prev",
    },

    pagination: {
      el: ".reviews__slider-pagination",
      type: "fraction",
    },

    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });
}
