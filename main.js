const hamburger = document.getElementById('hamburger-btn');
const btn = document.getElementById('btn');
const ham_menu = document.getElementById('nav__menu');
const no_scroll = document.getElementById('no_scroll');

hamburger.addEventListener('click', () => {
  btn.classList.toggle('close');
  ham_menu.classList.toggle('add-menu-sp');
  no_scroll.classList.toggle('no_scroll');
});

// Chromeでページ読み込み時のちらつく現象回避
const body = document.querySelector('.preload-transition');

window.addEventListener('load', () => {
  body.classList.remove('preload-transition');
});
