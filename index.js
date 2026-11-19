const menuButton = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const openIcon = document.querySelector('.header__main-ham-menu')
const closeIcon = document.querySelector('.header__main-ham-menu-close')

function setMenuOpen(open) {
  smallMenu.classList.toggle('header__sm-menu--active', open)
  openIcon.classList.toggle('d-none', open)
  closeIcon.classList.toggle('d-none', !open)
  menuButton.setAttribute('aria-expanded', String(open))
  menuButton.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu')
}

menuButton.addEventListener('click', () => {
  setMenuOpen(menuButton.getAttribute('aria-expanded') !== 'true')
})
smallMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => setMenuOpen(false))
})
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    setMenuOpen(false)
    menuButton.focus()
  }
})
