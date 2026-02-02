document.addEventListener('DOMContentLoaded', () => {
    const photo = document.querySelector('.realizations__wrapper-photo')
    const prevBtn = document.querySelector('.realizations__wrapper-arrow-left')
    const nextBtn = document.querySelector('.realizations__wrapper-arrow-right')

    const images = [
        'images/table.jpg',
        'images/plan.jpg',
        'images/tools.jpg',
        'images/coffeemachine.jpg'
    ]

    let currentIndex = 0
    let isAnimating = false
    let autoplayInterval = null
    let autoplayStopped = false

    const updateImage = () => {
        if (isAnimating) return
        isAnimating = true

        photo.style.opacity = '0'

        setTimeout(() => {
            photo.style.backgroundImage = `url('${images[currentIndex]}')`
            photo.style.opacity = '1'
        }, 150)

        setTimeout(() => {
            isAnimating = false
        }, 350)
    };

    const next = (fromUser = false) => {
        if (fromUser) stopAutoplay()
        currentIndex = (currentIndex + 1) % images.length
        updateImage()
    }

    const prev = (fromUser = false) => {
        if (fromUser) stopAutoplay()
        currentIndex = (currentIndex - 1 + images.length) % images.length
        updateImage()
    }

    const startAutoplay = () => {
        autoplayInterval = setInterval(() => {
            if (!autoplayStopped) {
                next()
            }
        }, 3000)
    }

    const stopAutoplay = () => {
        autoplayStopped = true
        clearInterval(autoplayInterval)
    }

    nextBtn.addEventListener('click', () => next(true))
    prevBtn.addEventListener('click', () => prev(true))

    let startX = 0
    let endX = 0
    const swipeThreshold = 50

    photo.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX
    }, { passive: true })

    photo.addEventListener('touchmove', (e) => {
        endX = e.touches[0].clientX
    }, { passive: true })

    photo.addEventListener('touchend', () => {
        const deltaX = endX - startX

        if (Math.abs(deltaX) < swipeThreshold || isAnimating) return

        stopAutoplay()

        if (deltaX > 0) {
            prev()
        } else {
            next()
        }

        startX = 0
        endX = 0
    });

    photo.style.backgroundImage = `url('${images[0]}')`
    startAutoplay()
});
