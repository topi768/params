

function burger() {
  document.getElementById("menu-btn").classList.toggle('menu-btn_active');
  document.getElementById("body").classList.toggle('lock');

  event.preventDefault();

  document.getElementById("nav__content").classList.toggle('nav__content_active');
}
