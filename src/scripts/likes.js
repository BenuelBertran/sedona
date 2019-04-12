'use strict';

(function() {
  const likeCatcher = document.querySelector('.photos');
  
  //increase/decrease likes amount by button
  likeCatcher.addEventListener('click', function(e) {
    let like = e.target;
    if (like.classList.contains('photos__input')) {
      if (like.checked) {
        like.nextSibling.innerText++
      } else {
        like.nextSibling.innerText--
      }
    }
  });
})();
