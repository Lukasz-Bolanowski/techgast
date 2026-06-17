gsap.registerPlugin(ScrollTrigger)

const animationItems = document.querySelectorAll('section');

animationItems.forEach(item => {
    gsap.fromTo(item.children, { y: '+=100', opacity: 0 }, 
    { y: 0, opacity: 1, stagger: 0.15, duration: 0.4, ease: "easeIn", scrollTrigger: {
        trigger: item,
        start: 'top 60%'
    }})
});