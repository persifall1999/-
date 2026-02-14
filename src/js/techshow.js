let techShow = document.querySelector('.tech__show')
let image = techShow.querySelector('.show__all')
let showText = techShow.querySelector('.show__text')
let techHidden = document.querySelectorAll('.tech__item')

techShow.addEventListener('click', function () {
  if (showText.textContent === 'Показать все') {
    showText.textContent = 'Скрыть все'
    image.src = './img/expand-hide.svg'

    for (let i = 0; i < techHidden.length; i++) {
      techHidden[i].classList.remove('tech__item--hidden768')
      techHidden[i].classList.remove('tech__item--hidden1440')
    }
  } else {
    showText.textContent = 'Показать все'
    image.src = './img/expand.svg'

    for (let i = 3; i < techHidden.length; i++) {
      techHidden[i].classList.add('tech__item--hidden768')
    }

    for (let i = 4; i < techHidden.length; i++) {
      techHidden[i].classList.add('tech__item--hidden1440')
    }
  }
})
