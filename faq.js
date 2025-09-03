class Accordion {
    constructor(containerSelector) {
        this.container = document.querySelector(containerSelector)
        this.items = this.container.querySelectorAll('.accordion__item')

        this.init()
    }

    init() {
        this.items.forEach(item => {
            const title = item.querySelector('.accordion__item-title')
            const content = item.querySelector('.accordion__item-content')

            if (!title || !content) return

            title.addEventListener('click', () => this.toggleItem(item, content))
        });

        this.container.addEventListener('click', (event) => {
            const item = event.target.closest('.accordion__item')
            if (!item) return

            const icon = item.querySelector('i')
            if (!icon) return

            icon.classList.toggle('fa-plus', !item.classList.contains('active'))
            icon.classList.toggle('fa-minus', item.classList.contains('active'))
        });
    }

    toggleItem(item, content) {
        const isOpen = item.classList.contains('active')

        if (isOpen) {
            item.classList.remove('active')
            content.style.maxHeight = null
        } else {
            item.classList.add('active')
            content.style.maxHeight = content.scrollHeight + 'px'
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new Accordion('.accordion')
});
