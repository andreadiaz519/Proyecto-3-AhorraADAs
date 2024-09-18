document.addEventListener('DOMContentLoaded', function() {
    let botonAgregar = document.getElementById('boton-agregar');
    let contenedorOperacion = document.getElementById('contenedor-operacion');
    let contenidoPrincipal = document.getElementById('contenido-principal');
    let listaOperaciones = document.getElementById('listaOperaciones'); // Cambiado aquí

    // Verifica si listaOperaciones está en el DOM
    if (!listaOperaciones) {
        return; // Sale de la función si no encuentra el elemento
    }

    // Mostrar formulario para agregar nueva operación
    botonAgregar.addEventListener('click', function() {
        contenidoPrincipal.classList.add('hidden');
        contenedorOperacion.classList.remove('hidden');
    });
 FuncionalidadOperaciones

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
  
   main

    // Cerrar formulario de nueva operación y volver a la pantalla principal
    document.getElementById('cancelarNuevaOperacionBtn').addEventListener('click', function() {
        contenedorOperacion.classList.add('hidden');
        contenidoPrincipal.classList.remove('hidden');
    });

    

    // Mostrar y ocultar filtros
    const opcionesFiltros = document.getElementById('opcionesFiltros');
    const ocultarBtn = document.getElementById('ocultarBtn');

    ocultarBtn.addEventListener('click', function() {
        if (opcionesFiltros.style.display === 'none') {
            opcionesFiltros.style.display = 'block';
            ocultarBtn.textContent = 'Ocultar filtros';
        } else {
            opcionesFiltros.style.display = 'none';
            ocultarBtn.textContent = 'Mostrar filtros';
        }
    });

    // Menú hamburguesa
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    menuBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
    });

    // Enlaces del menú grande
    const enlaceBalance = document.getElementById('cardBalance');
    const enlaceCategorias = document.getElementById('cardCategorias');
    const enlaceReportes = document.getElementById('cardReportes');

    // Enlaces del menú móvil
    const mobileBalanceLink = document.getElementById('mobile-balance-link');
    const mobileCategoriasLink = document.getElementById('mobile-categorias-link');
    const mobileReportesLink = document.getElementById('mobile-reportes-link');

    // Secciones del contenido
    const contenedorCategorias = document.getElementById('contenedorCategorias');
    const contenedorReportes = document.getElementById('contenedorReportes');

    // Función para mostrar una sección y ocultar las demás
    function mostrarSeccion(seccion) {
        contenidoPrincipal.classList.add('hidden');
        contenedorCategorias.classList.add('hidden');
        contenedorReportes.classList.add('hidden');
        seccion.classList.remove('hidden');
    }

    // Enlaces del menú en pantallas grandes
    enlaceBalance.addEventListener('click', function() {
        mostrarSeccion(contenidoPrincipal);
    });

    enlaceCategorias.addEventListener('click', function() {
        mostrarSeccion(contenedorCategorias);
    });

    enlaceReportes.addEventListener('click', function() {
        mostrarSeccion(contenedorReportes);
    });

    // Enlaces del menú móvil
    mobileBalanceLink.addEventListener('click', function() {
        mostrarSeccion(contenidoPrincipal);
        mobileMenu.classList.add('hidden');
    });

    mobileCategoriasLink.addEventListener('click', function() {
        mostrarSeccion(contenedorCategorias);
        mobileMenu.classList.add('hidden');
    });

    mobileReportesLink.addEventListener('click', function() {
        mostrarSeccion(contenedorReportes);
        mobileMenu.classList.add('hidden');
    });
});

// Agregar Operaciones

const botonAgregar = document.getElementById('boton-agregar');
const contenedorOperacion = document.getElementById('contenedor-operacion');
const cancelarNuevaOperacionBtn = document.getElementById('cancelarNuevaOperacionBtn');
const formNuevaOperacion = document.getElementById('formNuevaOperacion');
const operacionesList = document.getElementById('operaciones-list');
const gananciasElem = document.getElementById('ganancias');
const gastosElem = document.getElementById('gastos');
const totalElem = document.getElementById('total');
const tituloFormulario = document.getElementById('titulo-formulario');
const contenidoPrincipal = document.getElementById('contenido-principal');
const seccionBalance = document.getElementById('seccion-balance');
const listaOperaciones = document.getElementById('listaOperaciones');
const imagenOperaciones = document.getElementById('imagenOperaciones')

let operaciones = JSON.parse(localStorage.getItem('operaciones')) || [];
let ganancias = 0;
let gastos = 0;

let editandoOperacion = null

function cargarDatos() {
    const operaciones = JSON.parse(localStorage.getItem('operaciones')) || [];
    const ganancias = parseFloat(localStorage.getItem('ganancias')) || 0;
    const gastos = parseFloat(localStorage.getItem('gastos')) || 0;

    const total = ganancias - gastos;
            gananciasElem.textContent = ganancias.toFixed(2);
            gastosElem.textContent = gastos.toFixed(2);
            totalElem.textContent = total.toFixed(2);

    // Mostrar operaciones
    operacionesList.innerHTML = '';
    operaciones.forEach(op => {
        const monto = parseFloat(op.monto);
        const div = document.createElement('div');
        div.classList.add('operation-item');
        div.setAttribute('data-id', op.id);
        div.innerHTML = `
            <div class="operation-column">${op.descripcion}</div>
            <div class="operation-column">${op.categoria}</div>
            <div class="operation-column">${op.fecha}</div>
            <div class="operation-column">${monto.toFixed(2)}</div>
            <div class="operation-column">
                <button class="text-blue-500 hover:text-blue-700 px-2 py-1 rounded" onclick="editarOperacion('${op.id}')">Editar</button>
                <button class="text-red-500 hover:text-red-700 px-2 py-1 rounded" onclick="eliminarOperacion('${op.id}')">Eliminar</button>
            </div>
        `;
        operacionesList.appendChild(div);
    });
}

 FuncionalidadOperaciones
//  / Mostrar imagen si no hay operaciones
if (operaciones.length === 0) {
    imagenOperaciones.classList.remove('hidden');
} else {
    imagenOperaciones.classList.add('hidden');
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
 main

        // Agregar o editar una operación
function guardarOperacion() {
    const descripcion = document.getElementById('descripcion').value;
    const monto = parseFloat(document.getElementById('monto-operacion').value);
    const tipo = document.getElementById('tipo-operacion').value;
    const categoria = document.getElementById('categoria-operacion').value;
    const fecha = document.getElementById('fecha').value;

    let operaciones = JSON.parse(localStorage.getItem('operaciones')) || [];

    if (editandoOperacion) {
        operaciones = operaciones.map(op => {
        if (op.id === editandoOperacion.id) {
        return {
            id: op.id,
            descripcion,
            monto,
            tipo,
            categoria,
            fecha
        };
        }
        return op;
        });
        editandoOperacion = null;
        } else {
            const nuevaOperacion = {
                id: Date.now().toString(),
                descripcion,
                monto,
                tipo,
                categoria,
                fecha
            };
                operaciones.push(nuevaOperacion);
            }

        localStorage.setItem('operaciones', JSON.stringify(operaciones));
        actualizarBalance();
        cargarDatos();
        ocultarFormulario();
        }

        function editarOperacion(id) {
            const operaciones = JSON.parse(localStorage.getItem('operaciones')) || [];
            const operacion = operaciones.find(op => op.id === id);
            if (operacion) {
                document.getElementById('descripcion').value = operacion.descripcion;
                document.getElementById('monto-operacion').value = operacion.monto;
                document.getElementById('tipo-operacion').value = operacion.tipo;
                document.getElementById('categoria-operacion').value = operacion.categoria;
                document.getElementById('fecha').value = operacion.fecha;
                editandoOperacion = operacion;
                tituloFormulario.textContent = 'Editar Operación';
                mostrarFormulario();
            }
        }

        function eliminarOperacion(id) {
            let operaciones = JSON.parse(localStorage.getItem('operaciones')) || [];
            operaciones = operaciones.filter(op => op.id !== id);
            localStorage.setItem('operaciones', JSON.stringify(operaciones));
            actualizarBalance();
            cargarDatos();
        }

        function mostrarFormulario() {
            contenidoPrincipal.classList.add('hidden');
            contenedorOperacion.classList.remove('hidden');
            imagenOperaciones.classList.add('hidden'); // Ocultar imagen cuando se muestra el formulario
        }

        function ocultarFormulario() {
            contenidoPrincipal.classList.remove('hidden');
            contenedorOperacion.classList.add('hidden');
            imagenOperaciones.remove('hidden'); // Mostrar imagen cuando se oculta el formulario
        }


        function actualizarBalance() {
            ganancias = 0; // Reiniciar ganancias
            gastos = 0; // Reiniciar gastos
        
            const operaciones = JSON.parse(localStorage.getItem('operaciones')) || [];
            
            operaciones.forEach(op => {
                if (op.tipo === 'ganancia') {
                    ganancias += parseFloat(op.monto);
                } else {
                    gastos += parseFloat(op.monto);
                }
            });
        
            localStorage.setItem('ganancias', ganancias.toFixed(2));
            localStorage.setItem('gastos', gastos.toFixed(2));
        }

        botonAgregar.addEventListener('click', mostrarFormulario);
            cancelarNuevaOperacionBtn.addEventListener('click', ocultarFormulario);
            formNuevaOperacion.addEventListener('submit', (e) => {
                e.preventDefault();
                guardarOperacion();
            });

            cargarDatos();

 FuncionalidadOperaciones

// Click para el enlace de reportes
enlaceReportes.addEventListener('click', function(event) {
    event.preventDefault(); 
  main

