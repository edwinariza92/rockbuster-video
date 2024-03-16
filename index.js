

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

