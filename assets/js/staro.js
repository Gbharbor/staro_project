function toggleMenu() {
    var menu = document.querySelector('.menu');
    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
  }
  
  function hideMenu() {
    var menu = document.querySelector('.menu');
    menu.style.display = 'none';
    menu.classList.remove('active');
  }