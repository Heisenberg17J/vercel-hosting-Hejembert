function initCarousel(carouselId, intervalTime = 3000) {
    var carouselElement = document.getElementById(carouselId);
    if (carouselElement) {
      var myCarousel = new bootstrap.Carousel(carouselElement, {
        interval: intervalTime,  // Tiempo entre cambios de diapositivas
        pause: 'hover',          // Pausa al pasar el mouse
        wrap: true               // Vuelve a la primera diapositiva después de la última
      });

      // Control manual con botones adicionales
      carouselElement.querySelector('.carousel-control-prev').addEventListener('click', function () {
        myCarousel.prev();
      });

      carouselElement.querySelector('.carousel-control-next').addEventListener('click', function () {
        myCarousel.next();
      });

      console.log(`Carrusel ${carouselId} inicializado.`);
    } else {
      console.warn(`No se encontró el carrusel con ID: ${carouselId}`);
    }
}

  // Inicializar múltiples carruseles
initCarousel('carouselZero', 5000); 
initCarousel('carouselOne', 5000); 
initCarousel('carouselTwo', 5000);
initCarousel('carouselThree', 5000);


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
