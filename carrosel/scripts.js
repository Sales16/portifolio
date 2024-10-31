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
