window.feedbackForm = (function () {
  'use strict';
  const nameInput = document.getElementById('name-input');
  const emailInput = document.getElementById('email-input');
  const messageInput = document.getElementById('message-input');
  const submitButton = document.getElementById('submit-button');

  let sendingBlocked;


  function init() {
    nameInput.onblur = () => {
      const nameIsValid = nameInput.value.match(/^.+\D\S$/i);
      if (nameIsValid) {
        showInvalidInputError(nameInput, 'hide');
      } else {
        showInvalidInputError(nameInput)
      }
    };

    emailInput.onblur = () => {
      const emailIsValid = emailInput.value.match(/^.+@.+\.\w+$/i);
      if (emailIsValid) {
        showInvalidInputError(emailInput, 'hide');
      } else {
        showInvalidInputError(emailInput)
      }
    };

    messageInput.onblur = () => {
      const containsBadWords = messageInput.value.match(/Хуй|Пизд|Еб[а@]н|Уе[б6]|Бля[дт]|Пид[оoаa0]р/i);
      if (containsBadWords) {
        showInvalidInputError(messageInput);
      } else {
        showInvalidInputError(messageInput, 'hide');
      }
    };

    submitButton.onclick = (event) => {
      if (sendingBlocked) {
        event.preventDefault();
      }else if(nameInput.value === "") {
        event.preventDefault();
        showInvalidInputError(nameInput)
      } else if(emailInput.value === "") {
        event.preventDefault();
        showInvalidInputError(emailInput)
      } else {
        showInvalidInputError(nameInput, 'hide');
        showInvalidInputError(emailInput, 'hide');
        alert('Message sent!');
      }
    };
  }

  function showInvalidInputError(element, action = 'show') {
    if (action === 'show') {
      element.parentElement.classList.add('invalid');
      element.classList.add('invalid-input');
      sendingBlocked = true;
    }
    else if (action === 'hide') {
      element.parentElement.classList.remove('invalid');
      element.classList.remove('invalid-input');
      sendingBlocked = false;
    }
  }

  return {
    init,
    showInvalidInputError,
    nameInput,
    emailInput,
    messageInput
  }
})();
