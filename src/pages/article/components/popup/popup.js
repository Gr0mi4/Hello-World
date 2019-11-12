const popup = function () {
  const question = document.querySelector('.question');
  const newsletter = document.querySelector('.newsletter');
  const sorryMessage = document.querySelector('.sorry-message');
  const thankMessage = document.querySelector('.thank-message');
  const maxHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
  );
  const height = maxHeight - document.documentElement.clientHeight;
  const yesButton = document.querySelector('.yes-button');
  const noButton = document.querySelector('.no-button');
  const cross = document.querySelector('.cross');
  const submit = document.querySelector('.submit-button');

  const invisibility = function (classname) {
    classname.classList.remove('visible');
  };

  const visibility = function (classname) {
    classname.classList.add('visible');
  };

  window.addEventListener('scroll', function () {
    if (pageYOffset > height && localStorage['quantity'] === undefined) {
      visibility(question);
      localStorage['quantity'] = '1';
    }
  });

  yesButton.addEventListener('click', function () {
    invisibility(question);
    visibility(newsletter);
  });

  noButton.addEventListener('click', function () {
    invisibility(question);
    visibility(sorryMessage);
    setTimeout(invisibility, 4000, sorryMessage);
  });

  cross.addEventListener('click', function () {
    invisibility(newsletter);
  });

  submit.addEventListener('click', function (evt) {
    evt.preventDefault();
    invisibility(newsletter);
    visibility(thankMessage);
    setTimeout(invisibility, 3000, thankMessage);
  });

  return localStorage['quantity'];
};
popup();
