window.articlePopup = (function articlePopup() {
  'use strict';
  console.log('Запуск');
  let popup;
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

  function removeVisibleClass (classname) {
    classname.classList.remove('visible');
  }

  function addVisibleClass (element) {
    element.classList.add('visible');
  }

  function showPopup() {
    if (pageYOffset > scrollHeight && ! localStorage.popupClosed) {
      addVisibleClass(popup);
      addVisibleClass(question);
      localStorage.popupClosed = true;
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
    setTimeout(removeVisibleClass, 4000, popup);
  }

  function hideNewsletter() {
    removeVisibleClass(newsletter);
    removeVisibleClass(popup);
  }

  function showThankMessage() {
    removeVisibleClass(newsletter);
    addVisibleClass(thankMessage);
    setTimeout(removeVisibleClass, 3000, thankMessage);
    setTimeout(removeVisibleClass, 3000, popup);
  }

  function submitButton(evt) {
    evt.preventDefault();
    showThankMessage();
  }

  function addListeners () {
    window.addEventListener('scroll', showPopup);
    yesButton.addEventListener('click', showNewsletter);
    noButton.addEventListener('click', showSorryMessage);
    cross.addEventListener('click', hideNewsletter);
    submit.addEventListener('click', submitButton);
  }

  function show() {
    addVisibleClass(popup);
    addVisibleClass(question);
  }

  function hide() {
    removeVisibleClass(question);
    removeVisibleClass(newsletter);
    removeVisibleClass(thankMessage);
    removeVisibleClass(sorryMessage);
    removeVisibleClass(popup);
  }

  function init() {
    popup = document.querySelector('.popup');
    question = popup.querySelector('.question');
    newsletter = popup.querySelector('.newsletter');
    sorryMessage = popup.querySelector('.sorry-message');
    thankMessage = popup.querySelector('.thank-message');
    pageHeight = Math.max(
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight
    );
    scrollHeight = pageHeight - document.documentElement.clientHeight;
    yesButton = popup.querySelector('.yes-button');
    noButton = popup.querySelector('.no-button');
    cross = popup.querySelector('.cross');
    submit = popup.querySelector('.submit-button');

    if (!localStorage.popupClosed) {
      addListeners();
    }
    else {console.log('Не работает')}
  }
  init();

  return  {
    init,
    show,
    hide
  }
  }
  )();

