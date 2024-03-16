document.addEventListener('DOMContentLoaded', () => {
    const select = document.getElementById('generos-select');
    const peliculasContainer = document.getElementById('peliculas-container');

    // Función para cargar las películas por género
    function cargarPeliculasPorGenero(genero) {
        fetch(`http://localhost:4002/peliculas/${genero}`)
            .then(response => response.json())
            .then(data => {
                renderMoviesTable(data);
            })
            .catch(error => console.error('Error al obtener las películas:', error));
    }

    function renderMoviesTable(movies) {
        const tableBody = document.querySelector('#movies-table tbody');

        tableBody.innerHTML = '';

        movies.forEach(movie => {
            const row = tableBody.insertRow();
            row.innerHTML = `
            <td>${movie}</td>
            <td>${movie.rental_rate}</td> <!-- Agrega el precio de alquiler -->
            <td><button class="btn-buy" data-movie-id="${movie.film_id}">Comprar</button></td>
        `;
        console.log(movie);

            const btnBuy = row.querySelector('.btn-buy');
            btnBuy.addEventListener('click', () => {
                const movieId = btnBuy.getAttribute('data-movie-id');
                comprarPelicula(movieId, movie);
            });
        });
       
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
