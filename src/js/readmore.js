let aboutButton = document.querySelector('.about__button')
let img = aboutButton.querySelector('.about__next')
let aboutButtonNext = aboutButton.querySelector('.about__button--next')
let aboutText = document.querySelectorAll('.about__text')

aboutButton.addEventListener('click', function () {
  if (aboutButtonNext.textContent === 'Читать далее') {
    aboutButtonNext.textContent = 'Скрыть все'
    img.src = './img/expand-hide.svg'

    for (let i = 0; i < aboutText.length; i++) {
      aboutText[3].classList.add('about__text--js')
      aboutText[3].classList.remove('about__text')
    }
  } else {
    aboutButtonNext.textContent = 'Читать далее'
    img.src = './img/expand.svg'

    for (let i = 0; i < aboutText.length; i++) {
      aboutText[3].classList.remove('about__text--js')
      aboutText[3].classList.add('about__text')
    }
  }
})
