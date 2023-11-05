const swiper = new Swiper('.swiper', {

  slidesPerView: 1.9,
  spaceBetween: 37,
  loop: true,
  centeredSlides: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
    dynamicMainBullets: 1,
  },
  keyboard:{
    enabled: true
  },
});