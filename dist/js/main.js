document.addEventListener("DOMContentLoaded", () => {

  const slidesList = document.querySelectorAll('.slider-item');
  const btnRight = document.querySelector('.home-slider-button.right');
  const btnLeft = document.querySelector('.home-slider-button.left');

  const slidesCount = slidesList.length;
  //const slideWidth = window.getComputedStyle(slidesList[0]).getPropertyValue('width');
  let currSlide = 1;
  slidesList[0].classList.add('active');

  btnLeft.addEventListener('click', () => {
    currSlide = (currSlide > 1) ? (currSlide - 1) : slidesCount;
    switchSlide();
  });

  btnRight.addEventListener('click', () => {
    currSlide = (currSlide < slidesCount) ? (currSlide + 1) : 1;
    switchSlide();
  });

  function switchSlide() {
    slidesList.forEach(slide => {
      let slideToSwitch = parseInt(slide.getAttribute('data-slide'));
      if (currSlide === slideToSwitch) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    })
  }

  console.log(slidesList[0])
});
document.addEventListener("DOMContentLoaded", () => {

    console.log('entry plants js')
});