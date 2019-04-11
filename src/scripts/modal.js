'use strict';

(function() {
  const feedbackButton = document.querySelector('.form__btn');
  const modalSuccess = document.querySelector('.success');
  const closeSuccess = document.querySelector('.success__btn');

  //Send feedback
  feedbackButton.addEventListener('click', function (e) {
    e.preventDefault();
    modalSuccess.removeAttribute('hidden');
  });

  //Close modal Success
  closeSuccess.addEventListener('click', function (e) {
    e.preventDefault();
    modalSuccess.setAttribute('hidden', '');
  });
})();
