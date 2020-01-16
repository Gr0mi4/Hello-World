window.feedbackForm = (function () {
  'use strict';
  let nameInput;
  let emailInput;
  let messageInput;
  let submitButton;
  let sendingBlocked;
  const ACTION = {
    SHOW: 'show',
    HIDE: 'hide'
  };

  function init() {
    nameInput = document.getElementById('name-input');
    emailInput = document.getElementById('email-input');
    messageInput = document.getElementById('message-input');
    submitButton = document.getElementById('submit-button');

    const VALIDATION_CHECK = {
      NAME: /^.+\D\S$/i,
      EMAIL: /^.+@.+\.\w+$/i,
      MESSAGE: /Хуй|Пизд|Еб[а@]н|Уе[б6]|Бля[дт]|Пид[оoаa0]р/i,
    };

    nameInput.onblur = validateInput(VALIDATION_CHECK.NAME);
    emailInput.onblur = validateInput(VALIDATION_CHECK.EMAIL);
    messageInput.onblur = validateInput(!VALIDATION_CHECK.MESSAGE);

    function validateInput(validationCheck) {
      return (event) => {
        const input = event.target;
        const isValid = input.value.match(validationCheck);

        if (isValid) {
          showInvalidInputError(input, ACTION.HIDE);
        } else {
          showInvalidInputError(input, ACTION.SHOW);
        }
      };
    }

    submitButton.onclick = (event) => {
      event.preventDefault();
      if(nameInput.value === "") {
        showInvalidInputError(nameInput)
      } else if(emailInput.value === "") {
        showInvalidInputError(emailInput)
      } else {
        showInvalidInputError(nameInput, ACTION.HIDE);
        showInvalidInputError(emailInput, ACTION.HIDE);
        alert('Message sent!');
      }
    };
  }

  function showInvalidInputError(element, action = 'show') {
    if (action === 'show') {
      element.parentElement.classList.add('invalid');
      sendingBlocked = true;
    }
    else if (action === 'hide') {
      element.parentElement.classList.remove('invalid');
      sendingBlocked = false;
    }
  }

  return {
    init,
    showInvalidInputError,
  }
})();


