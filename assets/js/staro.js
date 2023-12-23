// staro.js

function toggleMenu() {
  var menu = document.querySelector('.menu');
  menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
}



// Verifica a largura da tela antes de executar a função
function hideMenu() {
  if (window.innerWidth <= 800) {
    var menu = document.querySelector('.menu');
    menu.style.display = 'none';

  } else {
      // Execute sua lógica para telas maiores que 600 pixels, se necessário
      menu.style.display = 'block';
    }
}
hideMenu();