document.addEventListener('DOMContentLoaded', () => {
/* Header slider object */
 const headerSlider = {
   images: document.querySelectorAll('.header__img'),
   controls: document.querySelectorAll('.header__arrow-box'),
   caption: document.querySelectorAll('.header__list li'),
   activeCLassName: 'header__listItem--active',
   pictureNum: document.querySelector('.header__picture-number'),
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

 const imageSlider = {
   /* Remove display block from all images also remove "active" class from caption */
   reset: function (obj) {
     obj.images.forEach((image, imgIndex) => {
       image.style.display = 'none';
       obj.caption[imgIndex].classList.remove(obj.activeCLassName);
     });
   },
   /* Set slider to initial state on page load */
   initiate: function (obj) {
     obj.images[obj.index].style.display = 'block';
     obj.caption[obj.index].classList.add(obj.activeCLassName);
   },
   /* Add click event to slider controls */
   addClick: function (obj) {
     /* Arrows */
     obj.controls.forEach(arrow => {
       arrow.addEventListener('click', e => {
         this.slide(e, obj);
       })
     })

     /* Caption */
     obj.caption.forEach((elem, elemIndex) => {
       elem.addEventListener('click', e => {
         this.slideCaption(obj, elemIndex);
       })
     })
   },
   /* Handle arrow  click event and image change */
   slide: function (e, obj) {
     this.reset(obj);
     if (e.target.classList.contains('arrow--right')) {
       obj.index++;

       if (obj.index > obj.images.length - 1) {
         obj.index = 0;
       }

       obj.images[obj.index].style.display = 'block';
       obj.caption[obj.index].classList.add(obj.activeCLassName);
       this.pictureNum(obj);

     } else {
       obj.index--;

       if (obj.index < 0) {
         obj.index = obj.images.length - 1;
       }

       obj.images[obj.index].style.display = 'block';
       obj.caption[obj.index].classList.add(obj.activeCLassName);
       this.pictureNum(obj);
     }
   },

   /* Handle caption  click event and image change */
   slideCaption: function (obj, elemIndex) {
     this.reset(obj);

     obj.index = elemIndex;
     obj.images[obj.index].style.display = 'block';
     obj.caption[obj.index].classList.add(obj.activeCLassName);

     this.pictureNum(obj);
   },

   /* Handle large picture number in header slider */
   pictureNum: function (obj) {
     if (obj.pictureNum) {
       obj.pictureNum.innerHTML = `0${obj.index + 1}`;
     } else {
       return;
     }
   },

   startSlide: function (obj) {
     this.reset(obj);
     this.initiate(obj);
     this.addClick(obj);
   },
 }

 imageSlider.startSlide(headerSlider);
 imageSlider.startSlide(projectsSlider);

});