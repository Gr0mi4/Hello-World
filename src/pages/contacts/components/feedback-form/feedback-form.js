window.feedbackForm = (function () {
  'use strict';
  let nameInput;
  let emailInput;
  let messageInput;
  let submitButton;
  let sendingBlocked;

  const VALIDATION_CHECK = {
    NAME: /^.+\D\S$/i,
    EMAIL: /^.+@.+\.\w+$/i,
    MESSAGE: /^((?!Хуй|Пизд|Еб[а@]н|Уе[б6]|Бля[дт]|Пид[оoаa0]р).)*$/i,
  };

  function init() {
    nameInput = document.getElementById('name-input');
    emailInput = document.getElementById('email-input');
    messageInput = document.getElementById('message-input');
    submitButton = document.getElementById('submit-button');

    nameInput.onblur = validateInput(VALIDATION_CHECK.NAME);
    emailInput.onblur = validateInput(VALIDATION_CHECK.EMAIL);
    messageInput.onblur = validateInput(VALIDATION_CHECK.MESSAGE);

    function validateInput(validationCheck) {
      return (event) => {
        const input = event.target;
        const isValid = input.value.match(validationCheck);

        if (isValid) {
          hideInvalidInputError(input);
        } else {
          showInvalidInputError(input);
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
        hideInvalidInputError(nameInput);
        hideInvalidInputError(emailInput);
        alert('Message sent!');
      }
    };
  }

  function showInvalidInputError(element) {
      element.parentElement.classList.add('invalid');
      sendingBlocked = true;
  }

  function hideInvalidInputError(element) {
      element.parentElement.classList.remove('invalid');
      sendingBlocked = false;
  }

  return {
    init,
    showInvalidInputError,
    hideInvalidInputError
  }
})();


