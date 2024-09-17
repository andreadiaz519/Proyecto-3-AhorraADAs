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

//   Boton para abrir nueva operacion


  document.getElementById("boton-agregar").addEventListener("click", (e) => {
    e.preventDefault();
    showSection(getId("new-operation-section"));
    printCategories(getId("new-op-category-collection"));
 })

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

    // Enlaces del menú en pantallas grandes
const enlaceBalance = document.getElementById('cardBalance');
const enlaceCategorias = document.getElementById('cardCategorias');
const enlaceReportes = document.getElementById('cardReportes');

    // Enlaces del menú móvil
const mobileBalanceLink = document.getElementById('mobile-balance-link');
const mobileCategoriasLink = document.getElementById('mobile-categorias-link');
const mobileReportesLink = document.getElementById('mobile-reportes-link');

    // Secciones del contenido
const contenidoPrincipal = document.getElementById('contenido-principal');
const contenedorCategorias = document.getElementById('contenedorCategorias');
const contenedorReportes = document.getElementById('contenedorReportes');

    // Función para mostrar la sección seleccionada y ocultar las demás
function mostrarSeccion(seccion) {
    contenidoPrincipal.classList.add('hidden');
    contenedorCategorias.classList.add('hidden');
    contenedorReportes.classList.add('hidden');
    seccion.classList.remove('hidden');
    };

    
    // Enlaces del menú en pantallas grandes
    enlaceBalance.addEventListener('click', () => {
        mostrarSeccion(contenidoPrincipal);
    });

    enlaceCategorias.addEventListener('click', () => {
        mostrarSeccion(contenedorCategorias);
    });

    enlaceReportes.addEventListener('click', () => {
        mostrarSeccion(contenedorReportes);
    });

    // Enlaces del menú móvil
    mobileBalanceLink.addEventListener('click', () => {
        mostrarSeccion(contenidoPrincipal);
        mobileMenu.classList.add('hidden'); // Ocultar el menú móvil después de seleccionar
    });

    mobileCategoriasLink.addEventListener('click', () => {
        mostrarSeccion(contenedorCategorias);
        mobileMenu.classList.add('hidden');
    });

    mobileReportesLink.addEventListener('click', () => {
        mostrarSeccion(contenedorReportes);
        mobileMenu.classList.add('hidden');
    });



// Categorias y Reportes 

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