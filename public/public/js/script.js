function initCarousel(carouselId, intervalTime = 4000, useFade = true) {
    var carouselElement = document.getElementById(carouselId);
    if (!carouselElement) {
        console.warn(`No se encontró el carrusel con ID: ${carouselId}`);
        return;
    }

    // Añadir clase fade si se solicita
    if (useFade && !carouselElement.classList.contains('carousel-fade')) {
        carouselElement.classList.add('carousel-fade');
    }

    var myCarousel = new bootstrap.Carousel(carouselElement, {
        interval: intervalTime,
        pause: 'hover',
        wrap: true
    });

    // Indicadores
    var indicators = carouselElement.querySelectorAll('.carousel-indicators [data-bs-slide-to]');
    indicators.forEach(function (indicator, idx) {
        indicator.addEventListener('click', function (e) {
            e.preventDefault();
            myCarousel.to(idx);
        });
    });

    console.log(`Carrusel ${carouselId} inicializado.`);
}

// Inicializar múltiples carruseles
initCarousel('carouselPacman', 4000, true);
initCarousel('carouselLimitado', 4000, true);
initCarousel('carouselArtesanal', 4000, true);
initCarousel('carouselSnake', 4000, true);


function redirectToWhatsApp(event) {
  event.preventDefault();
  const nombre = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const asunto = document.getElementById('subject').value;
  const mensaje = document.getElementById('message').value;

  const encodedMessage = encodeURIComponent(
    `* ${asunto} *\nHola, mi nombre es ${nombre}, queria hablarle acerca de:\n${mensaje}.\nEste es mi email:${email}`
  );

  const whatsappURL = `https://wa.me/3136749128?text=${encodedMessage}`;
  window.open(whatsappURL, '_blank');

}

document.addEventListener('DOMContentLoaded', function () {
    var filter = document.getElementById('projectFilter');
    if (!filter) return;

    filter.addEventListener('change', function () {
        var selected = this.value;
        var projects = document.querySelectorAll('.row-cols-1 > .col');

        projects.forEach(function (project) {
            var categories = (project.getAttribute('data-category') || '').split(' ');
            if (selected === 'all' || categories.includes(selected)) {
                project.style.display = '';
            } else {
                project.style.display = 'none';
            }
        });
    });
});
