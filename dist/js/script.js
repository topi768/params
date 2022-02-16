
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

 // live Data In pie chart
 async function getResponce() {
  let response  = await fetch('https://script.googleusercontent.com/macros/echo?user_content_key=8G_wCk50X0BoByO2Lh6qu9U5p17Ihkw2ANt5_cgS5XUeNFEsVt4nUzH_g1CeAwp3_MDmTeXZx_7fK9F4QWt08BdbOPfj-NaVm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnJILmuUkX7-2fRM4sF4_IUXnBAc9lBBneA1xw6kgMkXh12oVKeuCZim_RZkk23jqN5o1I3EUoVlSwZOCS20QW1CxjTSIadW9mQ&lib=MBEHOj-5ApdPpk8Bi09PC0GulHhryzpvX')
  let content = await response.json()
  let key
  for ( key in content) {
    let  data0 =   content[key][0][0];
    let  data1 =   content[key][0][1];
    let  data2 =   content[key][0][2];
    myChart.data.datasets[0].data[0] = data0;
    myChart.data.datasets[0].data[1] = data1;
    myChart.data.datasets[0].data[2] = data2;
    // if ((data0 !== undefined) && (data1 !== undefined) && (data2 !== undefined))  {
    //
    // }
    console.log(data0);
  }

}

getResponce()
// console.log(myChart.data.datasets[0].data[0]);
//
