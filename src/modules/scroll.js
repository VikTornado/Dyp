const scroll = () => {
  const links = document.querySelectorAll(".top-menu a");
  const up = document.querySelector(".up");
  const logo = document.querySelector(".logo");

  links.forEach((element) => {
    element.addEventListener("click", (e) => {
      e.preventDefault();

      const id = element.getAttribute("href").substring(1);
      const section = document.getElementById(id);

      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  });

  const showUp = function () {
    const block = document.getElementById("services");
    const contentHeight = document.documentElement.scrollTop;
    const pageBegin = block.getBoundingClientRect().top;

    if (Math.abs(pageBegin) <= contentHeight) {
      up.style.display = "block";
    } else {
      up.style.display = "none";
    }
  };

  up.addEventListener("click", () => window.scroll(0, 0));
  window.addEventListener("scroll", showUp);
  logo.addEventListener("click", (e) => {
    e.preventDefault();
    window.scroll(0, 0);
  });
};

export { scroll };
