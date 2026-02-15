let fixed = document.querySelector('.fixed')
let headerButtonBurger = document.querySelector('.header__button--burger')
let headerButtonClose = document.querySelector('.header__button--close')
let blure = document.querySelector('.blure')

headerButtonClose.addEventListener('click', function (event) {
  event.stopPropagation()
  fixed.classList.add('fixed--hide')
  blure.classList.remove('blure--active')
  document.body.style.overflow = ''
})

headerButtonBurger.addEventListener('click', function (event) {
  event.stopPropagation()
  fixed.classList.remove('fixed--hide')
  blure.classList.add('blure--active')
  document.body.style.overflow = 'hidden'
})

blure.addEventListener('click', function () {
  if (window.innerWidth < 1440) {
    fixed.classList.add('fixed--hide')
    blure.classList.remove('blure--active')
    fixed.classList.remove('blure--active')
    document.body.style.overflow = ''
  }
})

let checkWindowSize = function () {
  if (window.innerWidth >= 1440) {
    fixed.classList.remove('fixed--hide')
    blure.classList.remove('blure--active')
    fixed.classList.remove('blure--active')
    document.body.style.overflow = ''
  }
}
checkWindowSize()
window.addEventListener('resize', checkWindowSize)
