import Swiper, { Navigation, Pagination } from 'swiper'
Swiper.use([Navigation, Pagination])

const initMobileSwiper = function (selector, options = {}) {
  const container = document.querySelector(selector)
  let swiper = null

  if (!container) return

  const handleResize = function () {
    const isMobile = window.innerWidth < 768

    if (isMobile && !swiper) {
      swiper = new Swiper(container, {
        direction: 'horizontal',
        loop: true,
        spaceBetween: 16,
        slidesPerView: 'auto',
        observer: true,
        observeParents: true,
        // Смешиваем дефолтные настройки с кастомными
        ...options
      })
    } else if (!isMobile && swiper) {
      swiper.destroy(true, true)
      swiper = null
    }
  }

  window.addEventListener('resize', handleResize)
  handleResize()
}

initMobileSwiper('.swiper-brands', {
  pagination: {
    el: '.brands-pagination',
    clickable: true
  }
})

initMobileSwiper('.swiper-products', {
  pagination: {
    el: '.products-pagination',
    clickable: true
  }
})

initMobileSwiper('.swiper-services', {
  pagination: {
    el: '.services-pagination',
    clickable: true
  }
})

export default initMobileSwiper
