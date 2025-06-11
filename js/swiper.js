const swiperTestimonial = new Swiper(".swiperTestimonial", {
  spaceBetween: 40,
  slidesPerView: 3,
  navigation: {
    nextEl: ".swiper-button-next-testimonial",
    prevEl: ".swiper-button-prev-testimonial",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    769: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

const swiperBlog = new Swiper(".swiperBlog", {
  spaceBetween: 40,
  slidesPerView: 2,
  navigation: {
    nextEl: ".swiper-button-next-blog",
    prevEl: ".swiper-button-prev-blog",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    769: {
      slidesPerView: 2,
    },
    1025: {
      slidesPerView: 2,
    },
  },
});

const swiperFounders = new Swiper(".swiperFounders", {
  spaceBetween: 27,
  slidesPerView: 3,
  navigation: {
    nextEl: ".swiper-button-next-founders",
    prevEl: ".swiper-button-prev-founders",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
