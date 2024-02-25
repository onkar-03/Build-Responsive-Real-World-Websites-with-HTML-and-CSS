// Dynamic Year update in HTML using JavaScript in footer section
const year = document.querySelector('.year');
const currentYear = new Date().getFullYear();
year.textContent = currentYear;

// Toggle menu for Mobile Navigation
const button = document.querySelector('.btn-mobile-nav');
const header = document.querySelector('.header');

button.addEventListener('click', function () {
  header.classList.toggle('nav-open');
});
