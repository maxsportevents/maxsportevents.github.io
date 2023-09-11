
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
    ocultarEncabezado();
  }
  
  function cerrarImagen() {
    // Obtener el elemento modal
    const modal = document.getElementById("imagen-modal");
  
    // Ocultar el modal
    modal.style.display = "none";
    mostrarEncabezado();
  }

  function ocultarEncabezado() {
    const encabezado = document.getElementById("header");
    // Cambiar el estilo para ocultar el encabezado
    encabezado.style.display = "none";
}

function mostrarEncabezado() {
  const encabezado = document.getElementById("header");
  // Cambia el estilo para mostrar el encabezado
  encabezado.style.display = "block";
}


 // Redireccionar imagen
 const imagen = document.getElementById('milogo');
        
 // Agregamos un evento de clic a la imagen
 imagen.addEventListener('click', function() {
     // Redireccionamos al índice (u otra página) al hacer clic en la imagen
     window.location.href = '..';
 });