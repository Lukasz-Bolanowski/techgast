const menu = document.querySelector('.hamburger')
const liItems = document.querySelectorAll('.menu__item a')
const aside = document.querySelector('aside')

class HandleMenu {
    constructor(menu) {
        this.menu = menu
    }

    toggleMenu() {
        this.menu.classList.toggle('active')
    }

    hideMenu() {
        liItems.forEach(li => {
            menu.classList.remove('active')
        })
    }
}

const handleMenu = new HandleMenu(menu)

const toggler = () => handleMenu.toggleMenu()
const hide = () => handleMenu.hideMenu()

menu.addEventListener('click', (toggler))
aside.addEventListener('click', (event) => {
    const id = event.target.dataset.id
    if (id) {
        setTimeout(() => hide(), 250)
    }
 })