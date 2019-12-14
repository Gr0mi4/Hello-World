window.modal = (function Modal() {
  'use strict';
  let modalWindow;
  let modalOverlay;
  let cross;

  function init() {
    cross = document.getElementById('cross');
    modalWindow = document.getElementById('modal');
    modalOverlay = document.getElementById('modal-overlay');
    cross.addEventListener('click', hideModal);
    modalOverlay.addEventListener('click', hideModal);
  }

  function showModal() {
    modalWindow.classList.add('visible');
    modalOverlay.classList.add('visible');
  }

  function hideModal() {
    modalWindow.classList.remove('visible');
    modalOverlay.classList.remove('visible');
  }

  return {
    init,
    showModal,
    hideModal
  }
})();
