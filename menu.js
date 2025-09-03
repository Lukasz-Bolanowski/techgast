document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.desktop')
    const menuOffset = menu.offsetTop

    window.addEventListener('scroll', () => {
        if (window.scrollY > menuOffset) {
            menu.classList.add('sticky')
        } else {
            menu.classList.remove('sticky')
        }
    })
})