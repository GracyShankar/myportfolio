const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

navMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });
});


const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const messageError = document.getElementById('message-error');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let isValid = true;

  nameError.style.display = 'none';
  emailError.style.display = 'none';
  messageError.style.display = 'none';

  if (!nameInput.value.trim()) {
    nameError.style.display = 'block';
    isValid = false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput.value)) {
    emailError.style.display = 'block';
    isValid = false;
  }

  if (!messageInput.value.trim()) {
    messageError.style.display = 'block';
    isValid = false;
  }

  if (isValid) {
    alert('Message sent successfully!');
    form.reset();
  }
});