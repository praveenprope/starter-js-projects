const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let currentIndex = 0;


function showSlide(index) {
  slides.style.transform = `translateX(${-index * 100}%)`;
}


next.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slide.length; 
  showSlide(currentIndex);
});


prev.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slide.length) % slide.length; 
  showSlide(currentIndex);
});


setInterval(() => {
  currentIndex = (currentIndex + 1) % slide.length;
  showSlide(currentIndex);
}, 3000);
