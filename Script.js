// =========================
// Mobile Menu Toggle
// =========================
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Close mobile menu on link click
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// =========================
// Contact Form Submission
// =========================
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    alert('Thanks for your message! I will get back to you soon.');
    contactForm.reset();
  });
}

// =========================
// Smooth Scrolling
// =========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

// =========================
// Skills Animation on Scroll
// =========================
const skills = document.querySelectorAll('.skill');

function checkScroll() {
  skills.forEach(skill => {
    const skillPosition = skill.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;
    if (skillPosition < screenPosition) {
      skill.style.opacity = 1;
      skill.style.transform = 'translateY(0)';
    }
  });
}

// Initial state
skills.forEach(skill => {
  skill.style.opacity = 0;
  skill.style.transform = 'translateY(20px)';
  skill.style.transition = 'all 0.5s ease';
});

window.addEventListener('scroll', checkScroll);
window.addEventListener('load', checkScroll);

// =========================
// Hero Section Typing Effect
// =========================
const texts = [
  { text: " Web Developer", color: "#00C9FF" },
  { text: " App Developer", color: "#4facfe" },
  { text: " Frontend Developer", color: "#00C9FF" },
  { text: " Backend Developer", color: "#00C9FF" },
  { text: " Full Stack Developer", color: "#00C9FF" }
];

let count = 0;
let index = 0;
let currentText = '';
let letter = '';

function type() {
  if (count === texts.length) count = 0;
  currentText = texts[count].text;
  letter = currentText.slice(0, ++index);

  document.getElementById('typed-text').innerHTML =
    `<span style="color:${texts[count].color}">${letter}</span>`;

  if (letter.length === currentText.length) {
    setTimeout(erase, 1500);
  } else {
    setTimeout(type, 150);
  }
}

function erase() {
  letter = currentText.slice(0, --index);

  document.getElementById('typed-text').innerHTML =
    `<span style="color:${texts[count].color}">${letter}</span>`;

  if (letter.length === 0) {
    count++;
    index = 0;
    setTimeout(type, 500);
  } else {
    setTimeout(erase, 100);
  }
}

document.addEventListener("DOMContentLoaded", type);
