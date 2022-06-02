
document.body.onload = function () {
  setTimeout(function() {
    let preloaderOverlay = document.getElementById('preloaderOverlay');
    if ( !preloaderOverlay.classList.contains('done') ) {
      preloaderOverlay.classList.add('done');
      document.getElementById("body").classList.remove('lock');
    }
  },300);
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
for(let i = 0; i < input.length; i++) {
    input[i].addEventListener('click', function(){
      let thisTask = this.parentNode.parentNode.parentNode.parentNode;
      let thisAnswer = thisTask.querySelector('.answer');
      thisAnswer.classList.toggle('answer--open');
      formulaDerivationSolution()
    }, false);
}
// hover page
// function hoverPage() {
//   let title = document.getElementsByTagName("title")[0].innerHTML;
//   let nav__items = document.querySelectorAll('.nav__item');
//   for (let nav__item of nav__items) {
//     if (nav__item.innerHTML == title) {
//       nav__item.classList.add('nav__item__hover');
//     }
//   }
// }
 hoverPage()
 //
 function formulaDerivationSolution() {
   containerWidth = document.querySelector(".task__container").offsetWidth - 0;
   formulas = document.querySelectorAll("mjx-container");

   // function elementsWidth() {
     for (let formula of formulas) {
       var style = window.getComputedStyle(formula, null).getPropertyValue('font-size');
       var fontSize = parseFloat(style);

       if (formula.offsetWidth >  containerWidth) {
         formula.style.fontSize =  "calc(10.8px + 3.2 * ((100vw - 320px)/ 1030) )" ;
         // while (true) {
         //   fontSize
         // }
       }
     }
   // }
   // elementsWidth()
 }
