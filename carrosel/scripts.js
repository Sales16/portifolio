new Typed(".typedText", {
      strings: ["Desenvolvedor", "Front-end", "Back-end", "Fullstack"],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 2000
});

new Swiper('.card-wrapper', {
      loop: true,
      spaceBetween: 30,

      // If we need pagination
      pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true
      },

      // Navigation arrows
      navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
      },

      breakpoints: {
            0: {
                  slidesPerView: 1
            },
            768: {
                  slidesPerView: 2
            },
            1024: {
                  slidesPerView: 3
            },
      }
});

// SCROLL REVEAL

const sr = ScrollReveal({
      origin: 'top',
      distance: '80px',
      duration: 2000,
      reset: true
})

//  INÍCIO - TOP
sr.reveal('.card-texto', {})
sr.reveal('.card-type', { delay: 100 })
sr.reveal('.card-info', { delay: 200 })
sr.reveal('.card-btn', { delay: 200 })
sr.reveal('.social_icons', { delay: 200 })
sr.reveal('.box-imagem', { delay: 300 })
sr.reveal('.card-social', { delay: 300 })

// SOBRE - TOP
sr.reveal('.informacao', {})

// PROJETOS - TOP
sr.reveal('.carrossel', { interval: 200 })

// TITULO - TOP
sr.reveal('.top-header', {})

const srLeft = ScrollReveal({
      origin: 'left',
      distance: '80px',
      duration: 2000,
      reset: true
})

// SOBRE - ESQUERDA
srLeft.reveal('.informacao-texto', { delay: 100 })

const srRight = ScrollReveal({
      origin: 'right',
      distance: '80px',
      duration: 2000,
      reset: true
})

// CONTATO - DIREITA
srRight.reveal('.card-contato', { delay: 100 })
// SOBRE - DIREITA
srRight.reveal('.informacao-habilidade', { delay: 100 })

