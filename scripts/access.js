const loginBtn = document.querySelector('.js-loginBtn');
const signUpBtn = document.querySelector('.js-signUpBtn');
const cancelBtns = document.querySelectorAll('.js-cancelBtn');

const loginModal = document.querySelector('.js-loginModal');
const signUpModal = document.querySelector('.js-signUpModal');

const loginForm = document.querySelector('.js-loginForm');
const signUpForm = document.querySelector('.js-signUpForm');

function modalOpen(modal) {
  modal.style.display = 'block';
}

function modalClose(modal) {
  modal.style.display = 'none';
}

function handleBtnClick(event) {
  event.preventDefault();
  let btn = event.target;
  if (btn.innerText === 'Login') {
    modalOpen(loginModal);
  } else if (btn.innerText === 'Sign Up') {
    modalOpen(signUpModal);
  } else if (btn.innerText === 'Cancel') {
    modalClose(loginModal);
    modalClose(signUpModal);
  }
}

function addButtonHandler() {
  loginBtn.addEventListener('click', handleBtnClick);
  signUpBtn.addEventListener('click', handleBtnClick);
  cancelBtns.forEach(btn => {
    btn.addEventListener('click', handleBtnClick);
  });
}

function redirectToInnerPage() {
  document.location.href = 'inner.html';
}

function redirectToIndexPage() {
  document.location.href = 'index.html';
}

function handleLoginSubmit(event) {
  event.preventDefault();
  let inputs = event.target.querySelectorAll('input');
  let uname = inputs[0].value;
  let upwd = inputs[1].value;

  // ToDo. Authorization
  // Asis. Just Save User Infos in localStorage / Tobe. Save Session Info in LocalStorage
  localStorage.setItem('userName', uname);
  localStorage.setItem('userPwd', upwd);

  redirectToInnerPage();
}

function handleSignUp(event) {
  event.preventDefault();
  let inputs = event.target.querySelectorAll('input');
  let name = inputs[0].value;
  let uname = inputs[1].value;
  let upwd = inputs[2].value;

  // ToDo. Sign Up
  // Asis. Redirect to Index Page / Tobe. Save Account Information in DB or Something.

  redirectToIndexPage();
}

function addFormAction() {
  console.dir(loginForm);
  loginForm.addEventListener('submit', handleLoginSubmit);
  signUpForm.addEventListener('submit', handleSignUp);
}

function init() {
  addButtonHandler();
  addFormAction();
}

init();