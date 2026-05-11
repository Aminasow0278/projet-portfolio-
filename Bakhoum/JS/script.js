// Animation Home

const rotatingText = document.getElementById('rotating-text');
const cursor = document.querySelector('.cursor');
const texts = ['Developer', 'Designer', 'Larry Daniels'];
let currentTextIndex = 0;
let currentCharIndex = texts[2].length; 
let isTyping = false;
let isErasing = true;


rotatingText.textContent = texts[2];

function typeWriter() 
{
  const currentText = texts[currentTextIndex];

  if (isTyping) 
    {
    if (currentCharIndex < currentText.length) {
      rotatingText.textContent = currentText.substring(0, currentCharIndex + 1);
      currentCharIndex++;
      setTimeout(typeWriter, 80); 
    } else {
      isTyping = false;
      isErasing = true;
      setTimeout(typeWriter, 2000); // Pause avant d'effacer
    }
  } else if (isErasing) 
    {
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
  const nav = document.querySelector("nav");

  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

setTimeout(typeWriter, 1000);

//Menu Burger

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
  const dots = document.querySelectorAll(".dot");
  const slides = document.querySelectorAll(".testimonial");

  let currentIndex = 0;
  let interval;

  function updateSlider(index) {
    track.style.transform = `translateX(-${index * 100}%)`;

    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");
  }

  function changeSlide(index) {
    currentIndex = index;
    updateSlider(currentIndex);
    resetAutoSlide();
  }

  function startAutoSlide() {
    interval = setInterval(() => {
      currentIndex++;
      if (currentIndex >= slides.length) {
        currentIndex = 0;
      }
      updateSlider(currentIndex);
    }, 4000);
  }

  function resetAutoSlide() {
    clearInterval(interval);
    startAutoSlide();
  }

  // click sur dots
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      changeSlide(index);
    });
  });


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

document.addEventListener('DOMContentLoaded', function() {

  const filterLinks = document.querySelectorAll('.filter-link');

  const portfolioItems = document.querySelectorAll('.portfolio-item');

  // Ajouter un écouteur de clic sur chaque lien

  filterLinks.forEach(link => {
    link.addEventListener('click', function(e) {
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
const slider = document.getElementById('blogSlider');
const dotsContainer = document.getElementById('blogDots');

const cards = document.querySelectorAll('.blog-card');
let currentIndex = 0;

// nombre  possibles
const visibleCards = 3;
const maxIndex = cards.length - visibleCards;

// créer les dots
for (let i = 0; i <= maxIndex; i++) {
  const dot = document.createElement('span');
  dot.classList.add('dot');
  if (i === 0) dot.classList.add('active');

  dot.addEventListener('click', () => moveTo(i));
  dotsContainer.appendChild(dot);
}

const dots = document.querySelectorAll('.dot');

function moveTo(index) {
  currentIndex = index;

  const cardWidth = cards[0].offsetWidth + 25;
  slider.style.transform = `translateX(-${cardWidth * index}px)`;

  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
}

// autoplay
setInterval(() => {
  currentIndex++;
  if (currentIndex > maxIndex) currentIndex = 0;
  moveTo(currentIndex);
}, 6000);