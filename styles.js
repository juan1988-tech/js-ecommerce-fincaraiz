function buttonBurguer(firstLine, secondLine, thirdLine, headerNode){
  const firstLineBurguer = document.getElementById(firstLine);
  let secondLineBurguer = document.getElementById(secondLine);
  let thirdLineBurguer = document.getElementById(thirdLine);

  secondLineBurguer.classList.toggle('second-line-moved');
  thirdLineBurguer.classList.toggle('third-line-moved');

  const header = document.querySelector(headerNode);
  header.classList.toggle('header-1');
}

/*funcion menu de hamburguesa: home*/
const burguerButtonHome = document.getElementById('hero-menu-burguer');
burguerButtonHome.onclick = () => buttonBurguer('first-line','second-line','third-line','#header-home');


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