import './scss/main.scss'
import _isEmpty from 'lodash/isEmpty'
import _intersection from 'lodash/intersection'
const $ = jQuery

const sidebarLinks = document.querySelectorAll('aside.sidebar a')

sidebarLinks.forEach(link => {
  const href = window.location.href
  const path = window.location.pathname
  const pathArray = path.split('/')
  const linkHrefArray = link.href.split('/')
  if (!_isEmpty(_intersection(pathArray, linkHrefArray).filter(item => item !== ''))) {
    link.classList.add('active')
  }
})
// console.log(window.matchMedia('(max-width: 600)'))

if (window.matchMedia('(max-width: 768px)').matches) {
  const homeHero = document.querySelector('.home-hero img').src
  document.querySelectorAll('.home-hero').forEach(hero => {
    const imgSrc = hero.querySelector('img').src
    hero.style.background = `url(${imgSrc}) no-repeat center center`
  })
}
