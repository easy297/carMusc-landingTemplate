document.addEventListener('DOMContentLoaded', () => {

    const scrollItems = document.querySelectorAll('.scroll-item');

    const scrollAnimation = () => {
        let windowCenter = (window.innerHeight / 1.3) + window.scrollY;
        // console.log(windowCenter)
        scrollItems.forEach(el => {
            let scrollOffset = el.offsetTop + (el.offsetHeight / 2);
            console.log(scrollOffset)
            if (windowCenter >= scrollOffset) {
                el.classList.add('animation-class');
            } else {
                el.classList.remove('animation-class');
            }
        });
    };


    scrollAnimation();
    window.addEventListener('scroll', () => {
        scrollAnimation();
    });
});