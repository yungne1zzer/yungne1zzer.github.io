window.onload = function menuF() {
    var menu = document.getElementById('justnav');
    menu.onclick = function myFunction() {
     if (menu.className === 'topnav') {
      menu.className += ' responsive';
     } else {
      menu.className = 'topnav';
     }
    }
    }
    
