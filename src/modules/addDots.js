const addDots = function () {
  const slides = document.querySelectorAll(".top-slider .item");
  const slickDots = document.querySelector(".slick-dots");

  slides.forEach(() => {
    const dot = document.createElement("li");
    dot.classList.add("dot");
    slickDots.appendChild(dot);
  });
  [...document.querySelectorAll(".dot")][0].classList.toggle("slick-active");
};
export { addDots };
