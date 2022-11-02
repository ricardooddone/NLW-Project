// abre e fecha o menu quando clicar no icone
cons nav = document.querySelector('#header nav')
cons toggle = document.querySelectorAll('nav .toggle')

for(cons element of toggle) {
    element.addEventListener('click', function() {
        nav.classList.toggle('show')
    })
}

/* quando clicar em um item do menu, esconder o menu */
const links = document.querySelectorAll('nav ul li a')

for(cons link of links) {
    element.addEventListener('click', function() {
        nav.classList.remove('show')
    })
}

/* mudar o header da página quando der scroll*/
cons header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function () {
    if (window.scrollY >= navHeight) {
        header.classlist.add('scroll')
    } else {
        header.classList.remove('scroll')
    }
})

const swiper = new Swiper('swiper-container' {
    slidesPerView: 1;
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true
})

/* Scrollreveal: Mostrar elementos quando der scroll na página*/
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
})

scrollReveal.reveal(
    '#home .image, #home .text,
    #about .image, #about .text,
    #services header, #services .card,
    #testimonals header, #testimonials .testimonials
    #contact .text, #contact .links
    ',
    { interval: 100 }
)