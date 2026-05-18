// Animation Home

const rotatingText = document.getElementById('rotating-text');
const cursor = document.querySelector('.cursor');
const texts = ['Developer', 'Designer', 'Mouhamed Bakhoum'];
let currentTextIndex = 0;
let currentCharIndex = texts[2].length;
let isTyping = false;
let isErasing = true;


rotatingText.textContent = texts[2];

function typeWriter() {
  const currentText = texts[currentTextIndex];

  if (isTyping) {
    if (currentCharIndex < currentText.length) {
      rotatingText.textContent = currentText.substring(0, currentCharIndex + 1);
      currentCharIndex++;
      setTimeout(typeWriter, 80);
    } else {
      isTyping = false;
      isErasing = true;
      setTimeout(typeWriter, 2000); // Pause avant d'effacer
    }
  } else if (isErasing) {
    if (currentCharIndex > 0) {
      rotatingText.textContent = currentText.substring(0, currentCharIndex - 1);
      currentCharIndex--;
      setTimeout(typeWriter, 50); // Vitesse d'effacement
    } else {
      isErasing = false;
      currentTextIndex = (currentTextIndex + 1) % texts.length;
      isTyping = true;
      setTimeout(typeWriter, 500); // Pause avant de taper le prochain texte
    }
  }
}

window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav.main-nav");

  if (nav) {
    if (window.scrollY > 50) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  }
});

setTimeout(typeWriter, 1000);

// Menu Burger

const toggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});


const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});




// Testimonial slider

document.addEventListener("DOMContentLoaded", () => {

  const track = document.querySelector(".testimonial-track");
  const testimonialDots = document.querySelectorAll(".dots .dot");
  const slides = document.querySelectorAll(".testimonial");

  let testimonialIndex = 0;
  let testimonialInterval;

  function updateSlider(index) {
    track.style.transform = `translateX(-${index * 100}%)`;

    testimonialDots.forEach(dot => dot.classList.remove("active"));
    testimonialDots[index].classList.add("active");
  }

  function changeSlide(index) {
    testimonialIndex = index;
    updateSlider(testimonialIndex);
    resetAutoSlide();
  }

  function startAutoSlide() {
    testimonialInterval = setInterval(() => {
      testimonialIndex++;
      if (testimonialIndex >= slides.length) {
        testimonialIndex = 0;
      }
      updateSlider(testimonialIndex);
    }, 4000);
  }

  function resetAutoSlide() {
    clearInterval(testimonialInterval);
    startAutoSlide();
  }

  // click sur dots
  testimonialDots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      changeSlide(index);
    });
  });

  // Expose changeSlide globally for inline onclick
  window.changeSlide = changeSlide;

  startAutoSlide();

});

// Compter animation

const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;

    const increment = target / 200;

    if (count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(updateCount, 10);
    } else {
      counter.innerText = target;
    }
  };

  updateCount();
});

//  le DOM pour le filtrage de la galerie

document.addEventListener('DOMContentLoaded', function () {

  const filterLinks = document.querySelectorAll('.filter-link');

  const portfolioItems = document.querySelectorAll('.portfolio-item');

  // Ajouter un écouteur de clic sur chaque lien

  filterLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();


      filterLinks.forEach(l => l.classList.remove('active'));

      this.classList.add('active');


      const filterValue = this.getAttribute('data-filter');


      portfolioItems.forEach(item => {
        if (filterValue === 'all') {
          item.style.display = 'block';
        } else {
          const itemCategory = item.getAttribute('data-category');
          if (itemCategory === filterValue) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        }
      });
    });
  });
});


// ==================== JS BLOG  ====================
document.addEventListener('DOMContentLoaded', function () {
  const blogSlider = document.getElementById('blogSlider');
  const blogDotsContainer = document.getElementById('blogDots');

  if (!blogSlider || !blogDotsContainer) return;

  const cards = document.querySelectorAll('.blog-card');
  let blogCurrentIndex = 0;

  // nombre possibles
  const visibleCards = 3;
  const maxIndex = Math.max(0, cards.length - visibleCards);

  // créer les dots
  for (let i = 0; i <= maxIndex; i++) {
    const dot = document.createElement('span');
    dot.classList.add('blog-dot');
    if (i === 0) dot.classList.add('active');

    dot.addEventListener('click', () => blogMoveTo(i));
    blogDotsContainer.appendChild(dot);
  }

  const blogDots = blogDotsContainer.querySelectorAll('.blog-dot');

  function blogMoveTo(index) {
    blogCurrentIndex = index;

    const cardWidth = cards[0].offsetWidth + 25;
    blogSlider.style.transform = `translateX(-${cardWidth * index}px)`;

    blogDots.forEach(dot => dot.classList.remove('active'));
    blogDots[index].classList.add('active');
  }

  // autoplay
  setInterval(() => {
    blogCurrentIndex++;
    if (blogCurrentIndex > maxIndex) blogCurrentIndex = 0;
    blogMoveTo(blogCurrentIndex);
  }, 6000);
});


// ==================== VIDEO MODAL ====================

document.addEventListener('DOMContentLoaded', function () {
  const playBtn = document.getElementById('video-play-btn');
  const modal = document.getElementById('video-modal');
  const closeBtn = document.getElementById('video-modal-close');
  const iframe = document.getElementById('modal-video');

  const youtubeVideoUrl = 'https://www.youtube.com/embed/NSAOrGb9orM?autoplay=1&rel=0';

  if (!playBtn || !modal) return;

  // Ouvrir le modal et lancer la vidéo
  playBtn.addEventListener('click', function () {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    if (iframe) iframe.src = youtubeVideoUrl;
  });

  // Fermer avec le bouton X
  closeBtn.addEventListener('click', function () {
    closeModal();
  });

  // Fermer en cliquant à l'extérieur
  modal.addEventListener('click', function (e) {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Fermer avec ESC
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    // Vider le src pour arrêter la vidéo
    if (iframe) iframe.src = '';
  }
});


// ==================== MOBILE BOTTOM NAVBAR ====================

document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('section[id]');
  const mobileLinks = document.querySelectorAll('.mobile-bottom-nav a');

  if (mobileLinks.length === 0) return;

  // Highlight active link based on scroll position
  window.addEventListener('scroll', function () {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    mobileLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  });

  // Smooth scroll on mobile nav click
  mobileLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});