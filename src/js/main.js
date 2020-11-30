// enable strict mode
'use strict';
document.addEventListener('DOMContentLoaded', () => {
   const sliderMain = new Swiper('.slider-main__container', {
      spaceBetween: 30,
      speed: 1000,
      autoplay: {
         delay: 3000,
         disableOnInteraction: false,
      },
      pagination: {
         el: '.swiper-pagination',
         clickable: true,
      },
   });
});