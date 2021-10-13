// function backToTop() {
//   let button = $('.back-to-top');
//   $(window).on('scroll', () => {
//     if ($(this).scrollTop() > 100) {
//       button.fadeIn();
//     } else {
//       button.fadeOut();
//     }
//   });
//   button.on('click', e => {
//     e.preventDefault();
//     $('html').animate({ scrollTop: 0 }, 1000);
//   });
// }
// backToTop();



(function () {
  'use strict';

  function trackScroll() {
    var scrolled = window.pageYOffset;
    var coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
      goTopBtn.classList.add('back_to_top-show');
    }
    if (scrolled < coords) {
      goTopBtn.classList.remove('back_to_top-show');
    }
  }

  function backToTop() {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -80);
      setTimeout(backToTop, 0);
    }
  }

  var goTopBtn = document.querySelector('.back_to_top');

  window.addEventListener('scroll', trackScroll);
  goTopBtn.addEventListener('click', backToTop);
})();
