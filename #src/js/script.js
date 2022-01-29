//preloader
// window.onload = function () {
//   document.body.classList.add('loaded_hiding');
//   window.setTimeout(function () {
//     document.body.classList.add('loaded');
//     document.body.classList.remove('loaded_hiding');
//
//   }, 500);
// }
document.body.onload = function () {

  setTimeout(function() {
    var preloaderOverlay = document.getElementById('preloaderOverlay');
    if ( !preloaderOverlay.classList.contains('done') )
    {
      preloaderOverlay.classList.add('done');
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
      //
      function formulaDerivationSolution() {
        formula = thisAnswer.querySelector("mjx-math");
        console.log(formula.offsetWidth);
        // for(var i = 0; i < formula.length; i++) {
        //     };
      }
      //
      formulaDerivationSolution()
    }, false);
    //

}
//
// MathJax = {
//   chtml: {
//     scale: 1,                      // global scaling factor for all expressions
//     minScale: .5,                  // smallest scaling factor to use
//     mtextInheritFont: true,       // true to make mtext elements use surrounding font
//     merrorInheritFont: false,      // true to make merror text use surrounding font
//     mtextFont: '',                 // font to use for mtext, if not inheriting (empty means use MathJax fonts)
//     merrorFont: 'serif',           // font to use for merror, if not inheriting (empty means use MathJax fonts)
//     unknownFamily: 'serif',        // font to use for character that aren't in MathJax's fonts
//     mathmlSpacing: false,          // true for MathML spacing rules, false for TeX rules
//     skipAttributes: {},            // RFDa and other attributes NOT to copy to the output
//     exFactor: .5,                  // default size of ex in em units
//     displayAlign: 'center',        // default for indentalign when set to 'auto'
//     displayIndent: '0'             // default for indentshift when set to 'auto'
//   }
// };
//

//
// let abc = document.querySelector('.MathJax')
// console.log(abc);
