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

//   Cerrar el contenido cuando le doy cancelar en boton nueva operacion

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

//Funcion del Menu Hamburguesa

const linkBalance = document.getElementById('linkBalance');
const linkCategorias = document.getElementById('linkCategorias');
const linkReportes = document.getElementById('linkReportes');

const contenedorPrincipal = document.getElementById('contenido-principal');
const contenedorCategorias = document.getElementById('contenedorCategorias');
const contenedorReportes = document.getElementById('contenedorReportes');

// Ocultar todas las secciones
function ocultarSecciones() {
    contenedorPrincipal.classList.add('hidden');
    contenedorCategorias.classList.add('hidden');
    contenedorReportes.classList.add('hidden');
}

// Eventos a los enlaces
linkBalance.addEventListener('click', (event) => {
    event.preventDefault();  
    ocultarSecciones();      
    contenedorPrincipal.classList.remove('hidden'); 
});

linkCategorias.addEventListener('click', (event) => {
    event.preventDefault();
    ocultarSecciones();
    contenedorCategorias.classList.remove('hidden'); 
});

linkReportes.addEventListener('click', (event) => {
    event.preventDefault();
    ocultarSecciones();
    contenedorReportes.classList.remove('hidden'); 
});


// Categorias y Reportes 

const enlaceCategorias = document.getElementById('cardCategorias');
const enlaceReportes = document.getElementById('cardReportes');
const contenidoPrincipal = document.getElementById('contenido-principal');

function mostrarContenedor(contenedorMostrar) {
    contenidoPrincipal.style.display = 'none';  // Ocultar el contenido principal
    contenedorCategorias.style.display = 'none'; // Ocultar contenedor de categorías
    contenedorReportes.style.display = 'none';   // Ocultar contenedor de reportes

    contenedorMostrar.style.display = 'block';
}

//Volver al menú principal
function volverAlMenuPrincipal() {
    contenidoPrincipal.style.display = 'block';  // Mostrar el contenido principal
    contenedorCategorias.style.display = 'none'; // Ocultar contenedor de categorías
    contenedorReportes.style.display = 'none';   // Ocultar contenedor de reportes
}

// Click para el enlace de categorías
enlaceCategorias.addEventListener('click', function(event) {
    event.preventDefault();

    if (contenedorCategorias.style.display === 'none') {
        mostrarContenedor(contenedorCategorias);
    } else {
        volverAlMenuPrincipal(); 
    }
});

// Click para el enlace de reportes
enlaceReportes.addEventListener('click', function(event) {
    event.preventDefault(); 

    if (contenedorReportes.style.display === 'none') {
        mostrarContenedor(contenedorReportes); 
    } else {
        volverAlMenuPrincipal(); 
    }
});