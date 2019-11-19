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

  function invisibility (classname) {
    classname.classList.remove('visible');
  }

  function visibility(classname) {
    classname.classList.add('visible');
  }

  function showPopup() {
    if (pageYOffset > scrollHeight && localStorage['popupClosed'] === undefined) {
    visibility(popup);
    visibility(question);
    localStorage['popupClosed'] = true;
    }
  }

  function showNewsletter() {
    invisibility(question);
    visibility(newsletter);
  }

  function showSorryMessage() {
    invisibility(question);
    visibility(sorryMessage);
    setTimeout(invisibility, 4000, sorryMessage);
    setTimeout(invisibility, 4000, popup);
  }

  function hideNewsletter() {
    invisibility(newsletter);
    invisibility(popup);
  }

  function showThankMessage() {
    invisibility(newsletter);
    visibility(thankMessage);
    setTimeout(invisibility, 3000, thankMessage);
    setTimeout(invisibility, 3000, popup);
  }

  function addListeners() {
    if (localStorage['popupClosed'] === undefined) {
      window.addEventListener('scroll', showPopup);
      yesButton.addEventListener('click', showNewsletter);
      noButton.addEventListener('click', showSorryMessage);
      cross.addEventListener('click', hideNewsletter);
      submit.addEventListener('click', function (evt) {
        evt.preventDefault();
        showThankMessage();
      });
    }
  }
  addListeners();

  return  {
    init: function () {
      addListener()
    },
    show: function () {
      visibility(popup);
      visibility(question);
    },
    hide: function () {
      invisibility(question);
      invisibility(newsletter);
      invisibility(thankMessage);
      invisibility(sorryMessage);
      invisibility(popup);
    }
  };
}());
