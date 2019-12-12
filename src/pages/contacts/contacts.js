window.contactsMainScript = (function contactsMainScript() {
let feedbackButton = document.getElementById('leaveFeedbackButton');

window.modal.init();

feedbackButton.addEventListener('click', leaveFeedbackButtonClick);

function leaveFeedbackButtonClick(event) {
  event.preventDefault();
  window.modal.showModal();
}
})();

window.addEventListener('resize', changeMinHeight);

function changeMinHeight() {
  let main = document.querySelector('.main');
  let footer = document.querySelector('.footer');
  let header = document.querySelector('.blog-navigation');
  let footerHeight = footer.offsetHeight;
  let headerHeight = header.offsetHeight;
  main.style = `min-height: calc(100vh - ${footerHeight}px - ${headerHeight}px)`;
  console.log(`calc(100vh - ${footerHeight} - ${headerHeight})`);
}




