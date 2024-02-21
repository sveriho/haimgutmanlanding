document.querySelector('.header__burger-btn').addEventListener('click', function() {
  this.classList.toggle('active');
  document.querySelector('.header__logo').classList.toggle('positioned');
  document.querySelector('.header__nav').classList.toggle('open');
  document.querySelector('.backdrop').classList.toggle('visible');
})