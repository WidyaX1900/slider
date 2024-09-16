const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const items = document.querySelectorAll(".slider .content");
const thumbnails = document.querySelectorAll(".thumbnails .thumbnail-card");

let index = 0;
let sliderInterval;

// autoSlide();
nextButton.addEventListener("click", (event) => {
  clearInterval(sliderInterval);
  if (index <= 3) {
    items[0].classList.remove("base");
    nextButton.parentElement.classList.add("disabled");
    if (items[index + 1].classList.contains("prev")) {
      items[index + 1].classList.remove("prev");
    }
    items[index + 1].classList.add("next");
    index++;
    setTimeout(() => {
      nextButton.parentElement.classList.remove("disabled");
    }, 1300);
    // autoSlide();
  }
});

prevButton.addEventListener("click", (event) => {
  clearInterval(sliderInterval);
  if (index >= 1) {
    prevButton.parentElement.classList.add("disabled");
    if (items[index].classList.contains("next")) {
      items[index].classList.remove("next");
    }
    items[index].classList.add("prev");
    index--;
    setTimeout(() => {
      prevButton.parentElement.classList.remove("disabled");
    }, 1300);
    // autoSlide();
  }
});

function autoSlide() {
  sliderInterval = setInterval(() => nextButton.click(), 8000);
}
