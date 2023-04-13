const form = document.querySelector('#contact-form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const message = document.querySelector('#message').value;
  
  const url = `mailto:archvadze.dato7@gmail.com?subject=New Contact from ${name}&body=${message}`;
  
  window.open(url);
  
  form.reset();
});
