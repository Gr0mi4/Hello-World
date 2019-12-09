window.feedbackModal = (function feedbackModal() {
    'use strict';
  let feedbackButton;
  let modalWindow;
  let modalOverlay;

  function init() {
    feedbackButton = document.getElementById('leaveFeedbackButton');
    modalWindow = document.getElementById('modal');
    modalOverlay = document.getElementById('overlay');

    feedbackButton.addEventListener('click', leaveFeedbackButtonClick);
  }

  function showModal() {
    modalWindow.classList.remove('not-visible');
    modalOverlay.classList.remove('not-visible');
  }

  function leaveFeedbackButtonClick(event) {
    event.preventDefault();
    showModal();
    let cross = modalWindow.querySelector('.cross');
    cross.addEventListener('click', hideModal);
    modalOverlay.addEventListener('click', hideModal);
  }

  function hideModal() {
    modalWindow.classList.add('not-visible');
    modalOverlay.classList.add('not-visible');
  }

  return {
    init,
    showModal,
    hideModal
}
})();

window.feedbackModal.init();
