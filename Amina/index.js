const btn = document.getElementById("menuBtn");
        const menu = document.getElementById("mobileMenu");
        const closeBtn = document.getElementById("closeMenu");

        btn.addEventListener("click", () => {
            menu.classList.toggle("translate-x-full");


            closeBtn.addEventListener("click", () => {
                menu.classList.add("translate-x-full");
            });
        });

        
new Typed("#type", {
      strings: ["Aminata", "Déveloper", "Designer"],
      typeSpeed: 60,
      backSpeed: 40,
      loop: true
 });


const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    navbar.classList.add("bg-white", "shadow-lg");
    navbar.classList.remove("text-white");
  } else {
    navbar.classList.remove("bg-white", "shadow-lg");
     navbar.classList.add("text-white");
  }
});


// l'animation des chiffres statistiques
    const counters = document.querySelectorAll(".counter");
    let started = false;
 
    function startCounter() {
      counters.forEach(counter => {
        const target = +counter.getAttribute("data-target");
        let count = 0;

        const update = () => {
          const increment = target / 100;

          count += increment;

          if (count < target) {
            counter.innerText = Math.floor(count);
            requestAnimationFrame(update);
          } else {
            counter.innerText = target;
          }
        };

        update();
      });
    }

    window.addEventListener("scroll", () => {
      const section = document.getElementById("stats");
      const sectionTop = section.offsetTop;

      if (window.scrollY > sectionTop - 300 && !started) {
        startCounter();
        started = true;
      }
    }); 
    //fin de l'animation

  

    // Slides container
    const slides = document.querySelector('.slides');
    const dots = document.querySelectorAll('.dot');
    let index = 0;
    const total = dots.length;
    function updateCarousel() {
        slides.style.transform =
            `translateX(-${index * 100}%)`;


    }

    
    setInterval(() => {
        index++;
        if(index >= total){
            index = 0;
        }
        updateCarousel();
    }, 3000);


  // wwwwwwwwwww


  // ===== Modal vidéo =====

const openVideoModalBtn = document.getElementById("openVideoModalBtn");
const closeVideoModalBtn = document.getElementById("closeVideoModalBtn");
const videoModal = document.getElementById("videoModal");
const youtubeIframe = document.getElementById("youtubeIframe");

// Exemple :
// URL : https://www.youtube.com/watch?v=dQw4w9WgXcQ
// id = dQw4w9WgXcQ

// const youtubeId = "bP4e5Kwz8EE";

const videoUrl = "https://youtu.be/bP4e5Kwz8EE?t=1";

function openModal() {
  videoModal.classList.remove("hidden");
  videoModal.classList.add("flex");

  youtubeIframe.src = videoUrl;
}

function closeModal() {
  videoModal.classList.add("hidden");
  videoModal.classList.remove("flex");

  youtubeIframe.src = "";
}

if (openVideoModalBtn) {
  openVideoModalBtn.addEventListener("click", openModal);
}

if (closeVideoModalBtn) {
  closeVideoModalBtn.addEventListener("click", closeModal);
}

if (videoModal) {
  videoModal.addEventListener("click", (e) => {
    if (e.target === videoModal) {
      closeModal();
    }
  });
}

document.addEventListener("keydown", (e) => {
  if (
    e.key === "Escape" &&
    !videoModal.classList.contains("hidden")
  ) {
    closeModal();
  }
});