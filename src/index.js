const express = require("express");
const cors = require('cors');
const app = express();
const database = require("./database")

app.use(cors());
app.set("port", 4002);

const movies = [
    { title: 'Película 1', description: 'Descripción de la película 1', rental_rate: 5.99 },
    { title: 'Película 2', description: 'Descripción de la película 2', rental_rate: 4.99 },
    // Agrega más películas aquí
];
app.get('/movies', (req, res) => {
    // Limitar las películas a las primeras 15
    const limitedMovies = movies.slice(0, 15);
    res.json(limitedMovies);
});

app.get("/film", async (req, res) => {
    const conection = await database.getConection()
    const resultado = await conection.query(" SELECT * from film");
    res.json(resultado)
})
app.get("/actor", async (req, res) => {
    const conection = await database.getConection()
    const resultado = await conection.query(" SELECT * from actor");
    res.json(resultado)
})
app.get("/categorias", async (req, res) => {
    const conection = await database.getConection()
    const resultado = await conection.query(" SELECT * from category");
    res.json(resultado)
})
app.get("/film_categori", async (req, res) => {
    const conection = await database.getConection()
    const resultado = await conection.query(" SELECT * from film_category");
    res.json(resultado)
})
app.get("/actor_peli", async (req, res) => {
    const conection = await database.getConection()
    const resultado = await conection.query(" SELECT * from film_actor");
    res.json(resultado)
})
// Ruta para obtener las películas por género
app.get('/peliculas/:genero', async (req, res) => {
    const conection = await database.getConection()
    const genero = req.params.genero;
    const query = `
    SELECT film.title, film.rental_rate
        FROM film 
        INNER JOIN film_category ON film.film_id = film_category.film_id 
        INNER JOIN category ON film_category.category_id = category.category_id 
        WHERE category.name = ?;
  `;
    conection.query(query, [genero], (error, results) => {
        if (error) throw error;
        const peliculas = results.map(result => result.title);
        res.json(peliculas);
    });
});


app.listen(app.get("port"));
console.log("escuchando comunicaciones al puerto" + app.get("port"))

