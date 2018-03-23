const track = document.querySelector('.slider-track');
const leftArrow = document.querySelector('.arrow-left');
const rightArrow = document.querySelector('.arrow-right');
const slides = document.getElementsByClassName('slide');
const wWidth = window.innerWidth;
const slideCount = slides.length;

let index = 0;

// set up sizes
track.style.width = wWidth * slideCount + 'px';
for (i = 0; i < slides.length; i++) {
  slides[i].style.width = wWidth + 'px';
}

// move track
leftArrow.addEventListener('click', () => {
  index--;
  console.log('Left');
  track.style.transform = `translateX(-${wWidth * index}px)`;
});

rightArrow.addEventListener('click', () => {
  console.log(index);
  if((index + 1) >= 6) {
    return 0
  }
  index++;
  track.style.transform = `translateX(-${wWidth * index}px)`;
});


