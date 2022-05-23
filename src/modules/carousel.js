import Swiper, { Navigation } from "swiper";

const carousel = function () {

const swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    slidesPerGroup: 3,
    modules: [Navigation],
    breakpoints: {
      576: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
  
      1024: {
        slidesPerView: 3,
      },
    },
    loop: true,
    loopFillGroupWithBlank: true,
  
    navigation: {
      nextEl: ".arrow-right",
      prevEl: ".arrow-left",
    },
  });
};

export { carousel };
