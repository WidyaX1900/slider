const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const items = document.querySelectorAll(".slider .content");

let index = 0;
let sliderInterval;

nextButton.addEventListener("click", (event) => {
  if (index < 4) {
    index++;
    animationHandler("next");
    nextButton.parentElement.classList.add("disabled");

    if (index == 4) nextButton.classList.add("disabled");
    setTimeout(() => {
      nextButton.parentElement.classList.remove("disabled");
    }, 1300);
  }
});

prevButton.addEventListener("click", (event) => {
  if (index > 0) {
    animationHandler("prev");
    prevButton.parentElement.classList.add("disabled");
    index--;

    if (index == 0) prevButton.classList.add("disabled");
    setTimeout(() => {
      prevButton.parentElement.classList.remove("disabled");
      items[index + 1].classList.remove("prev");
    }, 1300);
  }
});

function animationHandler(type) {
  if (type == "next") {
    items[index].classList.remove("prev");
    items[index].classList.add("next");
    prevButton.classList.remove("disabled");
  } else if (type == "prev") {
    items[index].classList.remove("next");
    items[index].classList.add("prev");
    nextButton.classList.remove("disabled");
  }
}
