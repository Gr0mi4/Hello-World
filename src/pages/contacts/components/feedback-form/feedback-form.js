const nameInput = document.getElementById('name-input');
const emailInput = document.getElementById('email-input');
const messageInput = document.getElementById('message-input');
const submitButton = document.getElementById('submit-button');
const nameInputContainer = document.getElementById('name-input-container');
const emailInputContainer = document.getElementById('email-input-container');
const messageInputContainer = document.getElementById('message-input-container');

let sendingBlocked = false;

nameInput.onblur = function () {
  if (nameInput.value.match(/^.+ .* .*$/i)) {
    nameInputContainer.classList.add('invalid');
    nameInput.classList.add('invalid-input');
    sendingBlocked = true;
  }
  else {
    nameInputContainer.classList.remove('invalid');
    nameInput.classList.remove('invalid-input');
    sendingBlocked = true;
  }
};

emailInput.onblur = function () {
  if (!emailInput.value.match(/^.+@.+\.\w+$/i)) {
    emailInputContainer.classList.add('invalid');
    emailInput.classList.add('invalid-input');
    sendingBlocked = true;
  }
  else {
    emailInputContainer.classList.remove('invalid');
    emailInput.classList.remove('invalid-input');
    sendingBlocked = false;
  }
};

messageInput.onblur = function () {
  if (messageInput.value.match(/Хуй|Пизд|Еб[а@]н|Уе[б6]|Бля[дт]|Пид[оoаa0]р/i)) {
    messageInputContainer.classList.add('invalid-message');
    messageInput.classList.add('invalid-input');
    sendingBlocked = true;
  }
  else {
    messageInputContainer.classList.remove('invalid-message');
    messageInput.classList.remove('invalid-input');
    sendingBlocked = false;
  }
};

submitButton.addEventListener('click', function (event) {
  if (sendingBlocked) {
    event.preventDefault();
  }
  else {
    alert('Message sent!');
  }
});
