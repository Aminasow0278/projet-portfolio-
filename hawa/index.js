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