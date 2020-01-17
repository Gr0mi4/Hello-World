(function contactsMainScript() {
  window.modal.init();
  window.feedbackForm.init();

  const feedbackButton = document.getElementById('leave-feedback-button');
  feedbackButton.addEventListener('click', window.modal.showModal);

  window.addEventListener('resize', changeMinHeight);

  function changeMinHeight() {
    const main = document.querySelector('.main');
    const footer = document.querySelector('.footer');
    const header = document.querySelector('.blog-navigation');
    main.style = `min-height: calc(100vh - ${footer.offsetHeight}px - ${header.offsetHeight}px)`;
  }

  changeMinHeight();
})();


