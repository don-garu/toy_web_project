const loginBtn = document.querySelector('.js-loginBtn');
const signUpBtn = document.querySelector('.js-signUpBtn');
const loginModal = document.querySelector('.js-loginModal');
const signUpModal = document.querySelector('.js-signUpModal');
const cancelBtns = document.querySelectorAll('.js-cancelBtn');

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

function init() {
  loginBtn.addEventListener('click', handleBtnClick);
  signUpBtn.addEventListener('click', handleBtnClick);
  cancelBtns.forEach(btn => {
    btn.addEventListener('click', handleBtnClick);
  })
}

init();