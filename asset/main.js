document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper(".mySwiper", {
      loop: true,             // Enables infinite looping
      autoplay: {
        delay: 3000,          // Time in ms before automatically advancing to the next slide
        disableOnInteraction: false, // Keeps autoplay on user interaction
      },
      slidesPerView: 3,       // Number of slides visible at once
      spaceBetween: 5,        // Space between slides in px
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  });
  