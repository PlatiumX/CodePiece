
  function mostrarDescripcion(id) {
    const descripciones = document.querySelectorAll('.descripcion');
    descripciones.forEach(desc => {
      desc.classList.remove('visible');
    });

    const activa = document.getElementById(id);
    if (activa) {
      activa.classList.add('visible');
    }
  }
