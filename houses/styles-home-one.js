function buttonBurguer(firstLine, secondLine, thirdLine, headerNode){
  const firstLineBurguer = document.getElementById(firstLine);
  let secondLineBurguer = document.getElementById(secondLine);
  let thirdLineBurguer = document.getElementById(thirdLine);

  secondLineBurguer.classList.toggle('second-line-moved');
  thirdLineBurguer.classList.toggle('third-line-moved');

  const header = document.querySelector(headerNode);
  header.classList.toggle('header-1');
}

const burguerButtonOne = document.getElementById('hero-menu-burguer-1');
burguerButtonOne.onclick = () => buttonBurguer('first-line-1','second-line-1','third-line-1','#header-second');

/*funciones del contenedor de fotos*/

const carouselPhotos = document.getElementById('carousel-photo-container');

/*funcion de desplazamiento para el boton derecho*/
const rightButton = document.getElementById('right-button');
let scrollPhotoCounter = 0;

function turnRight(){
  if(scrollPhotoCounter > -300){
    scrollPhotoCounter = scrollPhotoCounter - 100;
    carouselPhotos.style.left = `${scrollPhotoCounter}%`;
    carouselPhotos.style.transformOrigin = 0;
    carouselPhotos.style.transitionDuration = ".8s";
    carouselPhotos.style.transitionTimingFunction = "linear"; 
  }
}

rightButton.onclick = turnRight;

/*funcion de desplazamiento para el boton izquierdo*/

const leftButton = document.getElementById('left-button');

function turnLeft(){
  if(scrollPhotoCounter < 0){
    scrollPhotoCounter = scrollPhotoCounter + 100;
    carouselPhotos.style.left = `${scrollPhotoCounter}%`;
    carouselPhotos.style.transitionDuration = "1s";
    carouselPhotos.style.transitionTimingFunction = "linear"; 
  }
}
leftButton.onclick = turnLeft;

/*funcion para la primer foto*/

const firstPhoto = document.querySelector('.photo-1');
firstPhoto.addEventListener('click',function(){
  switch(scrollPhotoCounter){
    case 0:
    scrollPhotoCounter= scrollPhotoCounter - 100; 
    carouselPhotos.style.left = `${scrollPhotoCounter}%`;
    carouselPhotos.style.transitionDuration = "1s";
    carouselPhotos.style.transitionTimingFunction = "linear";
    break;
    case -200:
    scrollPhotoCounter= scrollPhotoCounter + 100;  
    carouselPhotos.style.left = `${scrollPhotoCounter}%`;
    carouselPhotos.style.transitionDuration = "1s";
    carouselPhotos.style.transitionTimingFunction = "linear";
    break;
    case -300:
    scrollPhotoCounter= scrollPhotoCounter + 200;  
    carouselPhotos.style.left = `${scrollPhotoCounter}%`;
    carouselPhotos.style.transitionDuration = "1s";
    carouselPhotos.style.transitionTimingFunction = "linear";
}})

/*funcion para la segunda foto*/
const secondPhoto = document.querySelector('.photo-2');
secondPhoto.addEventListener('click',function(){
  switch(scrollPhotoCounter){
  case 0:
  scrollPhotoCounter= scrollPhotoCounter - 200; 
  carouselPhotos.style.left = `${scrollPhotoCounter}%`;
  carouselPhotos.style.transitionDuration = "1s";
  carouselPhotos.style.transitionTimingFunction = "linear"; 
  break;  
  case -100:
  scrollPhotoCounter= scrollPhotoCounter - 100;
  carouselPhotos.style.left = `${scrollPhotoCounter}%`;
  carouselPhotos.style.transitionDuration = "1s";
  carouselPhotos.style.transitionTimingFunction = "linear";
  break;
  case -300:
  scrollPhotoCounter= scrollPhotoCounter + 100;      
  carouselPhotos.style.left = `${scrollPhotoCounter}%`;
  carouselPhotos.style.transitionDuration = "1s";
  carouselPhotos.style.transitionTimingFunction = "linear";
}})

/*funcion para la tercera foto*/
const thirdPhoto =  document.querySelector('.photo-3');
thirdPhoto.addEventListener('click',function(){
  switch(scrollPhotoCounter){
  case 0:
  scrollPhotoCounter= scrollPhotoCounter - 300; 
  carouselPhotos.style.left = `${scrollPhotoCounter}%`;
  carouselPhotos.style.transitionDuration = "1s";
  carouselPhotos.style.transitionTimingFunction = "linear";  
  break;
  case -100:  
  scrollPhotoCounter= scrollPhotoCounter - 200;
  carouselPhotos.style.left = `${scrollPhotoCounter}%`;
  carouselPhotos.style.transitionDuration = "1s";
  carouselPhotos.style.transitionTimingFunction = "linear";   
  break;
  case -200:
  scrollPhotoCounter= scrollPhotoCounter - 100;
  carouselPhotos.style.left = `${scrollPhotoCounter}%`;
  carouselPhotos.style.transitionDuration = "1s";
  carouselPhotos.style.transitionTimingFunction = "linear";     
  }
})