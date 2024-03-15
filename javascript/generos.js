
document.addEventListener('DOMContentLoaded', () => {
    const select = document.getElementById('generos-select');
    const peliculasContainer = document.getElementById('peliculas-container');

    // Función para cargar las películas por género
    function cargarPeliculasPorGenero(genero) {
      fetch(`http://localhost:4002/peliculas/${genero}`)
        .then(response => response.json())
        .then(peliculas => {
          peliculasContainer.innerHTML = ''; // Limpiar contenedor
          peliculas.forEach(pelicula => {
            const p = document.createElement('p');
            p.textContent = pelicula;
            peliculasContainer.appendChild(p);
          });
        })
        .catch(error => console.error('Error al obtener películas:', error));
    }

    // Evento al cambiar la selección del género
    select.addEventListener('change', () => {
      const generoSeleccionado = select.value;
      if (generoSeleccionado) {
        cargarPeliculasPorGenero(generoSeleccionado);
      } else {
        peliculasContainer.innerHTML = ''; // Limpiar contenedor si no se selecciona ningún género
      }
    });

    // Cargar géneros al inicio
    fetch('http://localhost:4002/categorias')
      .then(response => response.json())
      .then(generos => {
        generos.forEach(genero => {
          const option = document.createElement('option');
          option.value = genero.name;
          option.textContent = genero.name;
          select.appendChild(option);
        });
      })
      .catch(error => console.error('Error al obtener géneros:', error));
  });
