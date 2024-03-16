fetch('http://localhost:4002/film')
    .then(response => response.json())
    .then(data => {

        renderMoviesTable(data);
    })
    .catch(error => console.error('Error al obtener las películas:', error));

    function renderMoviesTable(movies) {
        const tableBody = document.querySelector('#movies-table tbody');
    
        tableBody.innerHTML = '';
    
        movies.forEach(movie => {
            const row = tableBody.insertRow();
            row.innerHTML = `
            <td>${movie.title}</td>
            <td>${movie.description}</td>
            <td>${movie.replacement_cost}</td>
            <td><button class="btn-buy" data-movie-id="${movie.film_id}">Comprar</button></td> <!-- Botón Comprar -->
          `;
            const btnBuy = row.querySelector('.btn-buy');
            btnBuy.addEventListener('click', () => {
                const movieId = btnBuy.getAttribute('data-movie-id');
                comprarPelicula(movieId,movie);
            });
    
        });
    }