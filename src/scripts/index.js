'use strict';

(function() {
  const menuToggler = document.querySelector('.header__toggle');
  const mobileMenu = document.querySelector('.menu');
  const feedbackButton = document.querySelector('.form__btn');
  const modalSuccess = document.querySelector('.success');
  const closeSuccess = document.querySelector('.success__btn');
  
  //Fold/Unfold mobile menu
  menuToggler.addEventListener('click', function (e) {
    e.preventDefault();
    mobileMenu.classList.toggle('menu--unfold');
  });
  
  //Send feedback
  feedbackButton.addEventListener('click', function (e) {
    e.preventDefault();
    modalSuccess.removeAttribute('hidden');
  });
  
  //Close modal Success
  closeSuccess.addEventListener('click', function (e) {
    e.preventDefault();
    modalSuccess.setAttribute('hidden');
  });
})();
