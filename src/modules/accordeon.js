const accordeon = () => {
  const elements = document.querySelectorAll(".accordeon .element");
  const content = document.querySelectorAll(".accordeon .element-content");

  elements.forEach((item, index) => {
    const title = item.querySelector(".title");

    title.addEventListener("click", () => {
      if (content[index].classList.contains("open")) {
        content[index].style.display = "none";
      } else {
        content[index].style.display = "block";
      }
      content[index].classList.toggle("open");
      item.classList.toggle("active");

      elements.forEach((item2, index2) => {
        if (index != index2) {
          item2.classList.remove("active");
          content[index2].style.display = "none";
          content[index2].classList.remove("open");
        }
      });
    });
  });
};

export { accordeon };
