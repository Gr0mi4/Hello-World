window.articlePopup = (function articlePopup() {
    'use strict';
  let popupElement;
  let question;
  let newsletter;
  let sorryMessage;
  let thankMessage;
  let pageHeight;
  let scrollHeight;
  let yesButton;
  let noButton;
  let cross;
  let submit;

  function addVisibleClass(element) {
    element.classList.add('visible');
  }

  function removeVisibleClass(element) {
    element.classList.remove('visible');
  }

  function showPopup() {
    pageHeight = Math.max(
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight
    );
    scrollHeight = pageHeight - document.documentElement.clientHeight;

    if (pageYOffset >= scrollHeight && !localStorage.popupClosed) {
      addVisibleClass(popupElement);
      addVisibleClass(question);
      localStorage.popupClosed = true;
      removeEventListener('scroll', showPopup);
    }
  }

  function showNewsletter() {
    removeVisibleClass(question);
    addVisibleClass(newsletter);
  }

  function showSorryMessage() {
    removeVisibleClass(question);
    addVisibleClass(sorryMessage);
    setTimeout(removeVisibleClass, 4000, sorryMessage);
    setTimeout(removeVisibleClass, 4000, popupElement);
  }

  function hideNewsletter() {
    removeVisibleClass(newsletter);
    removeVisibleClass(popupElement);
  }

  function showThankMessage() {
    removeVisibleClass(newsletter);
    addVisibleClass(thankMessage);
    setTimeout(removeVisibleClass, 3000, thankMessage);
    setTimeout(removeVisibleClass, 3000, popupElement);
  }

  function onSubmitButtonClick(event) {
    event.preventDefault();
    showThankMessage();
  }

  function addListeners() {
    window.addEventListener('scroll', showPopup);
    yesButton.addEventListener('click', showNewsletter);
    noButton.addEventListener('click', showSorryMessage);
    cross.addEventListener('click', hideNewsletter);
    submit.addEventListener('click', onSubmitButtonClick);
  }

  function show() {
    addVisibleClass(popupElement);
    addVisibleClass(question);
  }

  function hide() {
    removeVisibleClass(question);
    removeVisibleClass(newsletter);
    removeVisibleClass(thankMessage);
    removeVisibleClass(sorryMessage);
    removeVisibleClass(popupElement);
  }

  function init() {
    popupElement = document.querySelector('.popup');
    question = popupElement.querySelector('.question');
    newsletter = popupElement.querySelector('.newsletter');
    sorryMessage = popupElement.querySelector('.sorry-message');
    thankMessage = popupElement.querySelector('.thank-message');
    yesButton = popupElement.querySelector('.yes-button');
    noButton = popupElement.querySelector('.no-button');
    cross = popupElement.querySelector('.cross');
    submit = popupElement.querySelector('.submit-button');

    if (!localStorage.popupClosed) {
      addListeners();
    }
  }

  return {
    init,
    show,
    hide
  }
})();

window.articlePopup.init();
