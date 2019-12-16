window.modal = (function Modal() {
  'use strict';
  let modalWindow;
  let modalOverlay;
  let closeButton;

  function init() {
    modalWindow = document.getElementById('modal');
    closeButton = modalWindow.querySelector('#close-button');
    modalOverlay = document.getElementById('modal-overlay');

    closeButton.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', closeModal);
    window.addEventListener('keydown', (event) => {
      if (event.code === 'Escape') {
        closeModal();
      }
    });
  }

  function showModal() {
    modalWindow.classList.add('visible');
    modalOverlay.classList.add('visible');
  }

  function closeModal() {
    modalWindow.classList.remove('visible');
    modalOverlay.classList.remove('visible');
  }

  return {
    init,
    showModal,
    closeModal
  }
})();
