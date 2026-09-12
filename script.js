/* ---- Mobile menu toggle ---- */
const navToggle = document.getElementById('navToggle');
const mobileMenu = document.getElementById('mobileMenu');
navToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});
mobileMenu.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

/* ---- Active nav link on scroll ---- */
const links = document.querySelectorAll('.nav-links a, .mobile-menu a');
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    const top = sec.offsetTop - 160;
    if (window.scrollY >= top) current = sec.getAttribute('id');
  });
  links.forEach(a => {
    a.classList.remove('active');
    if (a.getAttribute('href') === '#' + current) a.classList.add('active');
  });
});

/* ---- Custom trailing cursor (ring + dot) ---- */
const ring = document.getElementById('cursorRing');
const dot  = document.getElementById('cursorDot');
let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0;

window.addEventListener('mousemove', e => {
  mouseX = e.clientX; mouseY = e.clientY;
  dot.style.left = mouseX + 'px';
  dot.style.top  = mouseY + 'px';
});

function animateCursor() {
  ringX += (mouseX - ringX) * 0.18;
  ringY += (mouseY - ringY) * 0.18;
  ring.style.left = ringX + 'px';
  ring.style.top  = ringY + 'px';
  requestAnimationFrame(animateCursor);
}
animateCursor();

document.querySelectorAll('a, button, input, textarea, .skill-card, .project-card, .stat-card').forEach(el => {
  el.addEventListener('mouseenter', () => ring.classList.add('grow'));
  el.addEventListener('mouseleave', () => ring.classList.remove('grow'));
});

/* ---- Typewriter effect cycling through roles ---- */
const roles = ['Web Developer', 'Frontend Developer', 'UI/UX Enthusiast', 'IT Student'];
const typeEl = document.getElementById('typeRole');
let roleIndex = 0, charIndex = 0, deleting = false;

function typeLoop() {
  const word = roles[roleIndex];
  if (!deleting) {
    charIndex++;
    typeEl.textContent = word.slice(0, charIndex);
    if (charIndex === word.length) {
      deleting = true;
      setTimeout(typeLoop, 1400);
      return;
    }
  } else {
    charIndex--;
    typeEl.textContent = word.slice(0, charIndex);
    if (charIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }
  setTimeout(typeLoop, deleting ? 45 : 90);
}
typeLoop();

/* ---- Scroll-reveal fade-ins ---- */
const revealTargets = document.querySelectorAll(
  '.about-text, .stat-card, .skill-card, .project-card, .gallery-wrapper, .tl-item, .contact-info, .contact-grid form, .sec-head'
);
revealTargets.forEach(el => el.classList.add('reveal'));

const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealTargets.forEach(el => io.observe(el));

/* ---- Animate skill bars when Skills section scrolls into view ---- */
const skillBars = document.querySelectorAll('.bar-fill');
const skillsSection = document.getElementById('skills');
const barIO = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      skillBars.forEach(bar => {
        bar.style.width = bar.getAttribute('data-width') + '%';
      });
      barIO.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });
barIO.observe(skillsSection);

/* ---- Certifications: 3D Orbit Gallery ---- */


/* ---- 3D tilt-on-hover for project & stat cards ---- */
/* ==================================================
   PROJECT VIDEO VIEWER
   Click video → Open in new tab
   Video automatically muted
================================================== */

document.querySelectorAll(".proj-thumb video").forEach(video => {

  video.addEventListener("click", function () {

    const videoSrc = this.currentSrc || this.src;

    const newWindow = window.open("", "_blank");

    if (!newWindow) {
      alert("Please allow pop-ups to view the video.");
      return;
    }

    newWindow.document.write(`
      <!DOCTYPE html>

      <html>

      <head>

        <meta charset="UTF-8">

        <meta name="viewport"
              content="width=device-width, initial-scale=1.0">

        <title>Project Preview</title>

        <style>

          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          body {
            width: 100vw;
            height: 100vh;

            background: #000;

            display: flex;

            align-items: center;
            justify-content: center;

            overflow: hidden;
          }

          video {
            width: 100vw;
            height: 100vh;

            object-fit: contain;

            background: #000;
          }

        </style>

      </head>

      <body>

        <video
          src="${videoSrc}"
          autoplay
          muted
          controls
          playsinline>
        </video>

      </body>

      </html>
    `);

    newWindow.document.close();

  });

});

/* ---- Certificate lightbox ---- */
// === LIGHTBOX CONTROLS ===
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxClose = document.getElementById('lightboxClose');

// Open lightbox when any certificate card is clicked
document.querySelectorAll('.cert-card').forEach(card => {
  card.addEventListener('click', function() {
    const img = this.querySelector('img');
    if (img) {
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt || 'Certificate';
      lightbox.classList.add('open');
    }
  });
});

// Close lightbox functions
function closeLightbox() {
  lightbox.classList.remove('open');
  setTimeout(() => { 
    lightboxImg.src = ''; 
  }, 300);
}

lightboxClose.addEventListener('click', closeLightbox);

// Close when clicking outside image
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});

// Close with Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeLightbox();
});

/* ---- Contact form submit (front-end only — hook up a backend or Formspree/EmailJS) ---- */
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thanks for reaching out! I will get back to you soon.');
  contactForm.reset();
});
