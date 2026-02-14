let overlay = document.querySelector('.overlay')

let footerButtonPhone = document.querySelector('.footer__button--phone')
let headerButtonPhone = document.querySelector('.header__button--phone')
let overlayButtonClose = document.querySelector('.overlay__button--close')
let blure = document.querySelector('.blure')
let fixed = document.querySelector('.fixed')

overlayButtonClose.addEventListener('click', function (event) {
  event.stopPropagation()
  overlay.classList.add('feedback--hide')
  blure.classList.remove('blure--active')
  fixed.classList.remove('blure--active')
})

headerButtonPhone.addEventListener('click', function (event) {
  event.stopPropagation()
  overlay.classList.remove('feedback--hide')
  blure.classList.add('blure--active')
  fixed.classList.add('blure--active')
})

footerButtonPhone.addEventListener('click', function (event) {
  event.stopPropagation()
  overlay.classList.remove('feedback--hide')
  blure.classList.add('blure--active')
  fixed.classList.add('blure--active')
})

blure.addEventListener('click', function () {
  overlay.classList.add('feedback--hide')
  blure.classList.remove('blure--active')
  fixed.classList.remove('blure--active')
})
