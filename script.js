// Responsive Navbar Toggle
const navToggle = document.getElementById('nav-toggle');
const navbar = document.getElementById('navbar');
navToggle.addEventListener('click', () => {
  navbar.classList.toggle('open');
  navToggle.classList.toggle('active');
});

// Active Navbar Link Highlight
const navLinks = document.querySelectorAll('.navbar-link');
navLinks.forEach(link => {
  link.addEventListener('click', function () {
    navLinks.forEach(l => l.classList.remove('active'));
    this.classList.add('active');
  });
});

// Favorite Button Toggle
const favBtns = document.querySelectorAll('.fav-btn');
favBtns.forEach(btn => {
  btn.addEventListener('click', function () {
    this.classList.toggle('active');
  });
});

// Newsletter Form Demo (prevent submit)
const newsletterForm = document.querySelector('.footer-newsletter');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for subscribing!');
    newsletterForm.reset();
  });
}

// Smooth Scroll for Navbar Links
document.querySelectorAll('a.navbar-link').forEach(link => {
  link.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href.startsWith('#') && document.querySelector(href)) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    }
  });
});
// Lightbox functionality for property images
document.querySelectorAll('.property-list .img-cover').forEach(img => {
  img.style.cursor = 'pointer';
  img.addEventListener('click', function () {
    // Create overlay
    const overlay = document.createElement('div');
    overlay.style.cssText = 'position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0,0,0,0.8);display:flex;justify-content:center;align-items:center;z-index:9999;';
    // Create large image
    const bigImg = document.createElement('img');
    bigImg.src = this.src;
    bigImg.style.cssText = 'max-width:90vw;max-height:90vh;border-radius:8px;';
    overlay.appendChild(bigImg);
    // Close on click
    overlay.addEventListener('click', () => document.body.removeChild(overlay));
    document.body.appendChild(overlay);
  });
});
// Create scroll-to-top button
const scrollBtn = document.createElement('button');
scrollBtn.innerHTML = '<span class="material-symbols-rounded">arrow_upward</span>';
scrollBtn.style.cssText = 'position:fixed;bottom:30px;right:30px;display:none;z-index:1000;padding:12px 16px;border:none;background:#333;color:#fff;border-radius:50%;cursor:pointer;';
document.body.appendChild(scrollBtn);

window.addEventListener('scroll', () => {
  scrollBtn.style.display = window.scrollY > 200 ? 'block' : 'none';
});
scrollBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
const footerContactForm = document.getElementById('footer-contact-form');
const footerContactMsg = document.getElementById('footer-contact-msg');

if (footerContactForm) {
  footerContactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    footerContactMsg.textContent = 'Thank you for contacting us!';
    footerContactForm.reset();
    setTimeout(() => { footerContactMsg.textContent = ''; }, 4000);
  });
}