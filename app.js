// Agregar-Operaciones

document.addEventListener('DOMContentLoaded', function() {
    let botonAgregar = document.getElementById('boton-agregar');
    let contenedorOperacion = document.getElementById('contenedor-operacion');
    let contenidoPrincipal = document.getElementById('contenido-principal');
    let contenidoOtro = document.getElementById('contenido-otro');

    botonAgregar.addEventListener('click', function() {
      contenidoPrincipal.classList.add('hidden');
      contenedorOperacion.classList.remove('hidden');
    });
  });

//   Cerrar el contenido cuando le doy cancelar

  document.getElementById('boton-agregar').addEventListener('click', function() {
    document.getElementById('contenido-principal').classList.add('hidden');
    document.getElementById('contenedor-operacion').classList.remove('hidden');
  });

  document.getElementById('boton-cancelar').addEventListener('click', function() {
    document.getElementById('contenedor-operacion').classList.add('hidden');
    document.getElementById('contenido-principal').classList.remove('hidden');
  });


  //Mostrar y ocultar Filtros

  const opcionesFiltros = document.getElementById('opcionesFiltros');
        const ocultarBtn = document.getElementById('ocultarBtn');

        ocultarBtn.addEventListener('click', () => {
            if (opcionesFiltros.style.display === 'none') {
                opcionesFiltros.style.display = 'block';
                ocultarBtn.textContent = 'Ocultar filtros';
            } else {
                opcionesFiltros.style.display = 'none';
                ocultarBtn.textContent = 'Mostrar filtros';
            }
        });


// Menu hamburguesa

const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});