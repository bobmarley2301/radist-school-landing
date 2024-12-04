// Текстовий слайдер (відгуки)
const textSlider = document.getElementById('textSlider');
const prevTextButton = document.getElementById('prevText');
const nextTextButton = document.getElementById('nextText');
let currentTextIndex = 0;
const textSlides = textSlider.children;

function updateTextSlider() {
  textSlider.style.transform = `translateX(-${currentTextIndex * 100}%)`;
}

prevTextButton.addEventListener('click', () => {
  currentTextIndex = (currentTextIndex > 0) ? currentTextIndex - 1 : textSlides.length - 1;
  updateTextSlider();
});

nextTextButton.addEventListener('click', () => {
  currentTextIndex = (currentTextIndex < textSlides.length - 1) ? currentTextIndex + 1 : 0;
  updateTextSlider();
});



const imageSlider = document.getElementById('imageSlider');
const prevImageButton = document.getElementById('prevImage');
const nextImageButton = document.getElementById('nextImage');
let currentImageIndex = 0;
const imageSlides = imageSlider.children;

function updateImageSlider() {
  imageSlider.style.transform = `translateX(-${currentImageIndex * 100}%)`;
}

prevImageButton.addEventListener('click', () => {
  currentImageIndex = (currentImageIndex > 0) ? currentImageIndex - 1 : imageSlides.length - 1;
  updateImageSlider();
});

nextImageButton.addEventListener('click', () => {
  currentImageIndex = (currentImageIndex < imageSlides.length - 1) ? currentImageIndex + 1 : 0;
  updateImageSlider();
});
