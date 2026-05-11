const btn = document.getElementById("button");
        const menu = document.getElementById("mobile");
        const closeBtn = document.getElementById("closeMenu");

        btn.addEventListener("click", () => {
            menu.classList.toggle("translate-x-full");


            closeBtn.addEventListener("click", () => {
                menu.classList.add("translate-x-full");
            });
        });


new Typed("#type", {
      strings: ["Déveloper", "Designer", "Larry Dianiels"],
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


        // Reset all dots
        // dots.forEach(dot => {

        //     dot.classList.remove('bg-black');

        //     dot.classList.add('bg-gray-400');

        // });


        // Active dot
        // dots[index].classList.remove('bg-gray-400');

        // dots[index].classList.add('bg-black');
    }
    setInterval(() => {
        index++;
        if(index >= total){
            index = 0;
        }
        updateCarousel();
    }, 3000);
