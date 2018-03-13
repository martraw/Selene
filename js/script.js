 /* Header slider object */
const headerSlider = {
  images: document.querySelectorAll('.header__img'),
  controls: document.querySelectorAll('.header__arrow-box'),
  caption: document.querySelectorAll('.header__list li'),
  activeCLassName: 'header__listItem--active',
  index: 0
};

 /* Projects slider object */
const projectsSlider = {
  images: document.querySelectorAll('.latest__img'),
  controls: document.querySelectorAll('.latest__arrow-box'),
  caption: document.querySelectorAll('.latest__thumbnail'),
  activeCLassName: 'latest__thumbnail--active',
  index: 3
};

function slider(sliderObj) {

  function reset() {
   sliderObj.images.forEach((image, imgIndex) => {
      image.style.display = 'none';
      sliderObj.caption[imgIndex].classList.remove(sliderObj.activeCLassName);
   });
  }

  function startSlide() {
    sliderObj.images[sliderObj.index].style.display = 'block';
    sliderObj.caption[sliderObj.index].classList.add(sliderObj.activeCLassName);
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
      sliderObj.caption[sliderObj.index].classList.add(sliderObj.activeCLassName);
      

    } else {

      sliderObj.index --;

      if (sliderObj.index < 0) {
        sliderObj.index = sliderObj.images.length -1;
      }

      sliderObj.images[sliderObj.index].style.display = 'block';
      sliderObj.caption[sliderObj.index].classList.add(sliderObj.activeCLassName);
      
    }
  }

  reset();
  startSlide();
}

slider(headerSlider);
slider(projectsSlider);
