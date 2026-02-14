let feedback = document.querySelector('.feedback')
let footerButtonChat = document.querySelector('.footer__button--chat')
let headerButtonChat = document.querySelector('.header__button--message')
let feedbackButtonClose = document.querySelector('.feedback__button--close')
let blure = document.querySelector('.blure')
let fixed = document.querySelector('.fixed')

feedbackButtonClose.addEventListener('click', function (event) {
  event.stopPropagation()
  feedback.classList.add('feedback--hide')
  blure.classList.remove('blure--active')
  fixed.classList.remove('blure--active')
})

headerButtonChat.addEventListener('click', function (event) {
  event.stopPropagation()
  feedback.classList.remove('feedback--hide')
  blure.classList.add('blure--active')
  fixed.classList.add('blure--active')
})

footerButtonChat.addEventListener('click', function (event) {
  event.stopPropagation()
  feedback.classList.remove('feedback--hide')
  blure.classList.add('blure--active')
  fixed.classList.add('blure--active')
})

blure.addEventListener('click', function () {
  feedback.classList.add('feedback--hide')
  blure.classList.remove('blure--active')
  fixed.classList.remove('blure--active')
})
