window.feedbackForm = (function () {
  'use strict';
  const nameInput = document.getElementById('name-input');
  const emailInput = document.getElementById('email-input');
  const messageInput = document.getElementById('message-input');
  const submitButton = document.getElementById('submit-button');
  const nameInputContainer = document.getElementById('name-input-container');
  const emailInputContainer = document.getElementById('email-input-container');
  const messageInputContainer = document.getElementById('message-input-container');

  let sendingBlocked = false;

  nameInput.onblur = () => {
    const nameIsValid = nameInput.value.match(/^.+\D\S$/i);
    if (nameIsValid) {
      nameInputContainer.classList.remove('invalid');
      nameInput.classList.remove('invalid-input');
      sendingBlocked = true;
    } else {
      nameInputContainer.classList.add('invalid');
      nameInput.classList.add('invalid-input');
      sendingBlocked = false;
    }
  };

  emailInput.onblur = () => {
    const emailIsValid = emailInput.value.match(/^.+@.+\.\w+$/i);
    if (emailIsValid) {
      emailInputContainer.classList.remove('invalid');
      emailInput.classList.remove('invalid-input');
      sendingBlocked = false;
    } else {
      emailInputContainer.classList.add('invalid');
      emailInput.classList.add('invalid-input');
      sendingBlocked = true;
    }
  };

  messageInput.onblur = () => {
    const containsBadWords = messageInput.value.match(/Хуй|Пизд|Еб[а@]н|Уе[б6]|Бля[дт]|Пид[оoаa0]р/i);
    if (containsBadWords) {
      messageInputContainer.classList.add('invalid-message');
      messageInput.classList.add('invalid-input');
      sendingBlocked = true;
    } else {
      messageInputContainer.classList.remove('invalid-message');
      messageInput.classList.remove('invalid-input');
      sendingBlocked = false;
    }
  };

  submitButton.onclick = (event) => {
    if (sendingBlocked) {
      event.preventDefault();
    } else {
      alert('Message sent!');
    }
  };
})();
