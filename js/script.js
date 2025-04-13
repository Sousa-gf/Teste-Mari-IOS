// Função para iniciar o contador
function startCounter(element, start, end, duration, prefix = '') {
    let range = end - start;
    let current = start;
    let increment = end > start ? 1 : -1;
    let stepTime = Math.abs(Math.floor(duration / range));
    let timer = setInterval(() => {
        current += increment;
        element.textContent = prefix + current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}

// Configurar Intersection Observer para detectar quando os contadores entram na tela
let observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            startCounter(document.getElementById('c1'), 0, 500, 2000, '+');
            startCounter(document.getElementById('c2'), 0, 10, 2000);
            observer.disconnect(); // Para garantir que o contador só inicia uma vez
        }
    });
}, { threshold: 0.5 });

// Observar a seção onde os contadores estão
observer.observe(document.getElementById('counter-section'));


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