let brandsShow = document.querySelector('.brands__show')
let image = brandsShow.querySelector('.show__all')
let showText = brandsShow.querySelector('.show__text')
let brandsHidden = document.querySelectorAll('.brands__item')

brandsShow.addEventListener('click', function () {
  if (showText.textContent === 'Показать все') {
    showText.textContent = 'Скрыть все'
    image.src = './img/expand-hide.svg'

    for (let i = 0; i < brandsHidden.length; i++) {
      brandsHidden[i].classList.remove('brands__item--hidden768')
      brandsHidden[i].classList.remove('brands__item--hidden1120')
    }
  } else {
    showText.textContent = 'Показать все'
    image.src = './img/expand.svg'

    for (let i = 6; i < brandsHidden.length; i++) {
      brandsHidden[i].classList.add('brands__item--hidden768')
    }

    for (let i = 8; i < brandsHidden.length; i++) {
      brandsHidden[i].classList.add('brands__item--hidden1120')
    }
  }
})
