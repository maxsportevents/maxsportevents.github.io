/* Redireccionar imagen */
const imagen = document.getElementById('logo');

imagen.addEventListener('click', function() {
    window.location.href = '..';
});

/* menu desplegable */
function openMenu() {
    var menu = document.getElementById('menu');
    menu.classList.toggle('show');
}
function closeMenu() {
    var menu = document.getElementById('menu');
    menu.classList.remove('show');
    var menuToggle = document.getElementById("menu-toggle");
    if (menuToggle.checked) {
        menuToggle.checked = false;
    }
  }



/* unlock scroll row*/
window.onscroll = function() {
  scrollFunction();
};
  
function scrollFunction() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 20) {
    document.getElementById("scroll-to-top").style.display = "block";
  } else {
    document.getElementById("scroll-to-top").style.display = "none";
  }
}


/* Imagen ampliada */
function abrirImagen(src) {
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


/* Ocultar y mostrar el encabezado*/
function ocultarEncabezado() {
    const encabezado = document.getElementById("header");
    encabezado.style.display = "none";
}
function mostrarEncabezado() {
  const encabezado = document.getElementById("header");
  encabezado.style.display = "block";
}







const divs = document.querySelectorAll(".info-item");
let currentIndex = 0;

function showImage(index) {
    const galleryDiv = document.getElementById("info-div");
    currentIndex = index;

    if (currentIndex < 0) {
        currentIndex = divs.length - 1;
    } else if (currentIndex >= divs.length) {
        currentIndex = 0;
    }

    // Oculta todos los divs
    divs.forEach((div, i) => {
        if (i === currentIndex) {
            div.style.display = "block";
        } else {
            div.style.display = "none";
        }
    });
}

function prevButton() {
    showImage(currentIndex - 1);
}

function nextButton() {
    showImage(currentIndex + 1);
}

showImage(currentIndex);
