var articlePopup = (function() {
  'use strict';
  const popup = document.querySelector(".popup");
  const question = popup.querySelector('.question');
  const newsletter = popup.querySelector('.newsletter');
  const sorryMessage = popup.querySelector('.sorry-message');
  const thankMessage = popup.querySelector('.thank-message');
  const pageHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
  );
  const scrollHeight = pageHeight - document.documentElement.clientHeight;
  const yesButton = popup.querySelector('.yes-button');
  const noButton = popup.querySelector('.no-button');
  const cross = popup.querySelector('.cross');
  const submit = popup.querySelector('.submit-button');

  const invisibility = function (classname) {
    classname.classList.remove('visible');
  };

  const visibility = function (classname) {
    classname.classList.add('visible');
  };

  function addScrollListener() {
    if (localStorage['popupClosed'] === undefined) {
      window.addEventListener('scroll', function () {
        if (pageYOffset > scrollHeight) {
          visibility(popup);
          localStorage['popupClosed'] = true;
        }
      });
    }
  }
  addScrollListener();

  yesButton.addEventListener('click', function () {
    function showNewsLetter() {
      invisibility(question);
      visibility(newsletter);
    }
    showNewsLetter();
  });

  noButton.addEventListener('click', function () {
    function showSorryMessage () {
      invisibility(question);
      visibility(sorryMessage);
      setTimeout(invisibility, 4000, sorryMessage);
      setTimeout(invisibility, 4000, popup);
    }
    showSorryMessage();
  });

  cross.addEventListener('click', function () {
    function hideNewsLetter() {
      invisibility(newsletter);
      invisibility(popup);
    }
    hideNewsLetter();
  });

  submit.addEventListener('click', function (evt) {
    evt.preventDefault();
    function showThankMessage() {
      invisibility(newsletter);
      visibility(thankMessage);
      setTimeout(invisibility, 3000, thankMessage);
      setTimeout(invisibility, 3000, popup);
    }
    showThankMessage();
  });
  return  {
    init: function () {
      visibility(popup);
      visibility(question);
    }
  }
}());
