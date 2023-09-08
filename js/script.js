
// open menu desplegable
function openMenu() {
    var menu = document.getElementById('menu');
    menu.classList.toggle('show');
}

// close menu desplegable
function closeMenu() {
    var menu = document.getElementById('menu');
    menu.classList.remove('show');
  }

  /* unlock row */
  window.onscroll = function() {
    scrollFunction();
  };
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("scroll-to-top").style.display = "block";
    } else {
      document.getElementById("scroll-to-top").style.display = "none";
    }
  }


  function abrirImagen(src) {
    // Obtener el elemento modal y la imagen
    const modal = document.getElementById("imagen-modal");
    const imagenAmpliada = document.getElementById("imagen-ampliada");
  
    // Asignar la imagen seleccionada al elemento modal
    imagenAmpliada.src = src;
  
    // Mostrar el modal
    modal.style.display = "block";
  }
  
  function cerrarImagen() {
    // Obtener el elemento modal
    const modal = document.getElementById("imagen-modal");
  
    // Ocultar el modal
    modal.style.display = "none";
  }