window.addEventListener("load", function () {
  const loader = document.getElementById("loader");
  const main = document.getElementById("main");
  const title = document.getElementById("main-title");

  const minLoadTime = 3000; // milliseconds
  const fadeOutTime = 500;

  // Start delay for loader
  setTimeout(() => {
    loader.style.opacity = 0;

    setTimeout(() => {
      loader.classList.add("hidden");
      main.classList.remove("hidden");
      document.body.classList.remove("overflow-hidden");

      // 🌟 Animate title AFTER main content shows
      setTimeout(() => {
        title.classList.remove("translate-y-1/2", "opacity-0");
        title.classList.add("translate-y-0", "opacity-100");
      }, 300); // optional delay before animating title

    }, fadeOutTime);
  }, minLoadTime);
});


// Typed.js
const typed = new Typed('#typed-text', {
  strings: [
    "我每天都会爱妳多一些💕",
    "让我们的未来更有盼头 ✨",
    "美如天仙的妳，让我一次一次的坠入爱河 🥰"
  ],
  typeSpeed: 50,
  backSpeed: 25,
  backDelay: 4000,
  loop: true
});

// AOS init
AOS.init();

// Swiper init
const swiper = new Swiper(".mySwiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
