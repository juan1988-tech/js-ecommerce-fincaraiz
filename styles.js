function buttonBurguer(){
  const firstLine = document.getElementById('first-line');
  let secondLine = document.getElementById('second-line');
  let thirdLine = document.getElementById('third-line');
  secondLine.classList.toggle('second-line-moved');
  thirdLine.classList.toggle('third-line-moved');
}

const burguerButton = document.getElementById('hero-menu-burguer');
burguerButton.onclick = ()=> buttonBurguer();