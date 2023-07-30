
function redireccionar() {
    window.location.href = "html/inscripcion.html";
}

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


  
 /* Obtener el elemento select del número de jugadores
const selectJugadores = document.getElementById('jugadores');

// Obtener los elementos de los formularios para el primer y segundo jugador
const firstPlayerForm = document.querySelector('.first_player');
const secondPlayerForm = document.querySelector('.second_player');

// Agregar un evento change al selector de número de jugadores
selectJugadores.addEventListener('change', () => {
  // Obtener el valor seleccionado en el selector
  const selectedValue = selectJugadores.value;

  // Mostrar u ocultar el formulario del primer jugador según la opción seleccionada
  if (selectedValue === '1') {
    firstPlayerForm.style.display = 'block';
    secondPlayerForm.style.display = 'none';
  } else if (selectedValue === '2') {
    firstPlayerForm.style.display = 'block';
    secondPlayerForm.style.display = 'block';
  } else {
    firstPlayerForm.style.display = 'none';
    secondPlayerForm.style.display = 'none';
  }
});

// Llamar al evento change inicialmente para asegurarse de que los formularios se muestran u ocultan correctamente al cargar la página
selectJugadores.dispatchEvent(new Event('change'));*/