

function burger() {
  document.getElementById("menu-btn").classList.toggle('menu-btn_active');
  document.getElementById("body").classList.toggle('lock');
  event.preventDefault();
  document.getElementById("nav__content").classList.toggle('nav__content_active');
}
//

let input = document.querySelectorAll('input');
for(var i = 0; i < input.length; i++) {
    input[i].addEventListener('click', function(){
      let thisTask = this.parentNode.parentNode.parentNode.parentNode;
      let thisAnswer = thisTask.querySelector('.answer');
      thisAnswer.classList.toggle('answer--open')
    }, false);
}
