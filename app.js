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