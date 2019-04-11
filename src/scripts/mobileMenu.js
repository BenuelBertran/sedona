'use strict';

(function() {
  const menuToggler = document.querySelector('.header__toggle');
  const mobileMenu = document.querySelector('.menu');

  
  //Fold/Unfold mobile menu
  menuToggler.addEventListener('click', function (e) {
    e.preventDefault();
    mobileMenu.classList.toggle('menu--unfold');
  });
})();
