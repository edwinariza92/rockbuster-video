fetch('http://localhost:4002/film')
    .then(response => response.json())
    .then(data => {

        renderMoviesTable(data);
    })
    .catch(error => console.error('Error al obtener las películas:', error));

function search() {
    var searchText = document.getElementById("searchInput").value.toLowerCase();
    var table = document.getElementById("movies-table");
    var rows = table.getElementsByTagName("tr");

    for (var i = 1; i < rows.length; i++) {
        var cells = rows[i].getElementsByTagName("td");
        var title = cells[0].textContent.toLowerCase();

        if (title.includes(searchText)) {
            rows[i].style.display = "";
        } else {
            rows[i].style.display = "none";
        }
    }
}
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
let peliculasCompradas = {};
let contadorPeliculas = 0;


function comprarPelicula(movieId,movie) {
    if (peliculasCompradas[movieId]) {
        alert('¡Esta película ya se ha agregado al carrito!');
        return; // Sale de la función sin incrementar el contador
    }
    console.log(`Se ha comprado la película con ID: ${movieId}`);

    peliculasCompradas[movieId] = true;
    contadorPeliculas++;
    actualizarContadorCarrito();
    console.log(contadorPeliculas);
}

function actualizarContadorCarrito() {
    const cartCounter = document.getElementById('cart-counter');
    cartCounter.textContent = contadorPeliculas;
}

