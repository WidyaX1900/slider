const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const items = document.querySelectorAll(".slider .content");
const thumbnails = document.querySelectorAll(
  ".slider .thumbnails .thumbnail-card"
);

let index = 0;
let sliderInterval;

nextButton.addEventListener("click", (event) => {
  if (index < 4) {
    index++;
    animationHandler("next");
    nextButton.parentElement.classList.add("disabled");
    thumbnailSelected(thumbnails[index]);

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

    thumbnailSelected(thumbnails[index]);
    if (index == 0) prevButton.classList.add("disabled");
    setTimeout(() => {
      prevButton.parentElement.classList.remove("disabled");
      items[index + 1].classList.remove("prev");
    }, 1300);
  }
});

thumbnails.forEach((thumbnail, thumbIndex) => {
  thumbnail.addEventListener("click", (event) => {
    thumbnailSelected(thumbnail);
    if (thumbIndex > index) {
      for (let i = 0; i <= thumbIndex; i++) {
        if (i != 0) {
          animationHandler("next", i);
        }
      }
    } else {
      for (let i = index; i > thumbIndex; i--) {
        animationHandler("prev", i);
      }
    }
    index = thumbIndex;

    if (index == 0) {
      prevButton.classList.add("disabled");
    } else if (index == 4) {
      nextButton.classList.add("disabled");
    }
  });
});

function animationHandler(type, order = index) {
  if (type == "next") {
    items[order].classList.remove("prev");
    items[order].classList.add("next");
    prevButton.classList.remove("disabled");
  } else if (type == "prev") {
    items[order].classList.remove("next");
    items[order].classList.add("prev");
    nextButton.classList.remove("disabled");
  }
}

function thumbnailSelected(thumbnail) {
  const activeThumbnail = document.querySelector(
    ".slider .thumbnails .thumbnail-card.active"
  );
  activeThumbnail.classList.remove("active");
  thumbnail.classList.add("active");
}
