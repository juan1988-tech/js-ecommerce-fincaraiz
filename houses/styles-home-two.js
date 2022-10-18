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