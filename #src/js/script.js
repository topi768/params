
document.body.onload = function () {
  setTimeout(function() {
    var preloaderOverlay = document.getElementById('preloaderOverlay');
    if ( !preloaderOverlay.classList.contains('done') )
    {
      preloaderOverlay.classList.add('done');
      document.getElementById("body").classList.toggle('lock');
    }

  },500);
}
//
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
      thisAnswer.classList.toggle('answer--open');

      function formulaDerivationSolution() {
        containerWidth = document.querySelector(".task__container").offsetWidth - 10 ;
        elements = thisTask.querySelectorAll(".MJX-TEX");

        function elementsWidth() {
          for (let element of elements) {
            var style = window.getComputedStyle(element, null).getPropertyValue('font-size');
            var fontSize = parseFloat(style);

            if (element.offsetWidth >  containerWidth) {
              element.style.fontSize = '2.5vw';
            }
          }
        }
        elementsWidth()
      }
      formulaDerivationSolution()
    }, false);
}
// hover page
function hoverPage() {
  let title = document.getElementsByTagName("title")[0].innerHTML;
  let nav__items = document.querySelectorAll('.nav__item');
  for (let nav__item of nav__items) {
    if (nav__item.innerHTML == title) {
      nav__item.classList.add('nav__item__hover');
    }
  }
}
 hoverPage()
