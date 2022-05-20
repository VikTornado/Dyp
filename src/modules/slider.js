const slider = () => {
  const topSlider = document.querySelector(".top-slider");
  const slides = document.querySelectorAll(".top-slider .item");
  const tables = document.querySelectorAll(".table");
  const dots = document.querySelectorAll(".dot");

  let currentSlide = 0;
  let interval;

  const prevSlide = (elems, index, strClass) => {
    elems[index].classList.remove(strClass);
  };
  const nextSlide = (elems, index, strClass) => {
    elems[index].classList.add(strClass);
  };

  const autoSlide = () => {
    prevSlide(slides, currentSlide, "active");
    prevSlide(tables, currentSlide, "active");
    prevSlide(dots, currentSlide, "slick-active");

    currentSlide++;
    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }
    nextSlide(slides, currentSlide, "active");
    nextSlide(tables, currentSlide, "active");
    nextSlide(dots, currentSlide, "slick-active");
  };

  const startSlide = () => {
    interval = setInterval(autoSlide, 3000);
  };

  const stopSlide = () => {
    clearInterval(interval);
  };

  topSlider.addEventListener("click", (e) => {
    prevSlide(slides, currentSlide, "active");
    prevSlide(tables, currentSlide, "active");
    prevSlide(dots, currentSlide, "slick-active");

    if (e.target.classList.contains("dot")) {
      dots.forEach((dot, index) => {
        if (e.target === dot) {
          currentSlide = index;
        }
      });
    }

    nextSlide(slides, currentSlide, "active");
    nextSlide(tables, currentSlide, "active");
    nextSlide(dots, currentSlide, "slick-active");
  });

  topSlider.addEventListener(
    "mouseenter",
    (e) => {
      if (e.target.matches(".dot")) {
        stopSlide();
      }
    },
    true
  );

  topSlider.addEventListener(
    "mouseleave",
    (e) => {
      if (e.target.matches(".dot")) {
        startSlide();
      }
    },
    true
  );

  startSlide();
};

export { slider };
