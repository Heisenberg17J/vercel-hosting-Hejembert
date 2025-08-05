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

