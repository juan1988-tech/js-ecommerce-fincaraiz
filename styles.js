function buttonBurguer(){
  const firstLine = document.getElementById('first-line');
  let secondLine = document.getElementById('second-line');
  let thirdLine = document.getElementById('third-line');
  secondLine.classList.toggle('second-line-moved');
  thirdLine.classList.toggle('third-line-moved');
}

const burguerButton = document.getElementById('hero-menu-burguer');
burguerButton.onclick = ()=> buttonBurguer();

/*funciones de scroll para los bobtones verdades de las fotos de las casas */
function firstGreenButton(principalHome){
  const principalHomeCarousel =document.getElementById(principalHome);
  principalHomeCarousel.classList.replace('principal-home-carousel-1','principal-home-carousel');
  principalHomeCarousel.classList.replace('principal-home-carousel-2','principal-home-carousel');   
}

function secondGreenButton(principalHome){
  const principalHomeCarousel =document.getElementById(principalHome);
   principalHomeCarousel.classList.replace('principal-home-carousel','principal-home-carousel-1');
   principalHomeCarousel.classList.replace('principal-home-carousel-2','principal-home-carousel-1');   
}

function thirdGreenButton(principalHome){
  const principalHomeCarousel = document.getElementById(principalHome);
  principalHomeCarousel.classList.replace('principal-home-carousel-1','principal-home-carousel-2');   
  principalHomeCarousel.classList.replace('principal-home-carousel','principal-home-carousel-2');
}