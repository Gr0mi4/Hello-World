(function contactsMainScript() {
  let feedbackButton = document.getElementById('leave-feedback-button');

  window.modal.init();

  feedbackButton.addEventListener('click', leaveFeedbackButtonClick);

  function leaveFeedbackButtonClick(event) {
    event.preventDefault();
    window.modal.showModal();
  }

  window.addEventListener('resize', changeMinHeight);

  function changeMinHeight() {
    const main = document.querySelector('.main');
    const footer = document.querySelector('.footer');
    const header = document.querySelector('.blog-navigation');
    main.style = `min-height: calc(100vh - ${footer.offsetHeight}px - ${header.offsetHeight}px)`;
  }
  changeMinHeight();
})();


