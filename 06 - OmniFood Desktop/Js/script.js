// Dynamic Year update in HTML using JavaScript in footer section

const year = document.querySelector('.year');
const currentYear = new Date().getFullYear();
year.textContent = currentYear;
