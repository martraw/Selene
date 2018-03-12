 /* Header slider object */
const headerSlider = {
  images: document.querySelectorAll('.header__img'),
  controls: document.querySelectorAll('.header__arrow-box'),
  index: 0
};

 /* Projects slider object */
const projectsSlider = {
  images: document.querySelectorAll('.latest__img'),
  controls: document.querySelectorAll('.latest__arrow-box'),
  index: 3
};

function slider(sliderObj) {

  function reset() {
   sliderObj.images.forEach(image => {
      image.style.display = 'none';
   });
  }

  function startSlide() {
    sliderObj.images[sliderObj.index].style.display = 'block';
  }

  sliderObj.controls.forEach(arrow => {
    arrow.addEventListener('click', (e) => {
      slide(e);
    });
  });

  function slide(event) {
    reset();

    if (event.target.classList.contains('arrow--right')) {
      
      sliderObj.index ++;

      if (sliderObj.index > sliderObj.images.length -1) {
        sliderObj.index = 0;
      }

      sliderObj.images[sliderObj.index].style.display = 'block';

    } else {

      sliderObj.index --;

      if (sliderObj.index < 0) {
        sliderObj.index = sliderObj.images.length -1;
      }

      sliderObj.images[sliderObj.index].style.display = 'block';
    }
  }

  reset();
  startSlide();
}

slider(headerSlider);
slider(projectsSlider);
