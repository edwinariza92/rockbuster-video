

var listaPeliculas = ['https://1.bp.blogspot.com/-SWt9furxjhU/WD4cHIz_g3I/AAAAAAAB3R0/DCU7KcT8Kykcof5I8IYFiMiPNodwH6AkgCLcB/s1600/Capit%25C3%25A3o%2BFant%25C3%25A1stico.jpg', 'https://live.staticflickr.com/3327/3428645998_e6a6775888_z.jpg', 'https://m.media-amazon.com/images/M/MV5BMzg2Mzg4YmUtNDdkNy00NWY1LWE3NmEtZWMwNGNlMzE5YzU3XkEyXkFqcGdeQXVyMjA5MTIzMjQ@._V1_FMjpg_UX1000_.jpg', 'https://m.media-amazon.com/images/I/81Z6-ieAIyL.jpg', 'https://viureview.com.br/images/filmes8/La-la-land.jpg', 'https://static.rogerebert.com/uploads/movie/movie_poster/the-bridges-of-madison-county-1995/large_czRuGEx9Yhnh6nApirTLPToxHNu.jpg', 'https://lumiere-a.akamaihd.net/v1/images/p_soul_disneyplus_v2_20907_764da65d.jpeg', 'https://m.media-amazon.com/images/M/MV5BOTJiNDEzOWYtMTVjOC00ZjlmLWE0NGMtZmE1OWVmZDQ2OWJhXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_FMjpg_UX1000_.jpg', 'https://2.bp.blogspot.com/-KdOZ8zOrSsA/UVT4Sm4G1OI/AAAAAAAAAEQ/PZOtknEMUps/s1600/English_Spirited_Away_Poster_by_behruz.jpg','https://upload.wikimedia.org/wikipedia/en/thumb/3/3c/Amsterdam_%282022_film%29.jpg/220px-Amsterdam_%282022_film%29.jpg'];

//Desafío 2: agregue elementos a la lista usando .push

listaPeliculas.push('https://lumiere-a.akamaihd.net/v1/images/p_insideout_19751_af12286c.jpeg', 'https://cdn.shopify.com/s/files/1/1057/4964/products/harry-potter-and-the-chamber-of-secrets-vintage-movie-poster-original-1-sheet-27x41.jpg');

var nombrePeliculas = ['Capitán Fantástico', 'Kill Bill 1', 'Estrellas más allá del tiempo', 'El gran hotel Budapest', 'La La Land', 'Los puentes de Madison', 'Soul', 'Bastardos sin gloria', 'El viaje de Chihiro', 'Ámsterdam', 'Intensa-Mente', 'Harry Potter y la cámara secreta'];

document.write('<div class="container_todosFilmes">')

//Desafío 1 - Convertir for en while
var i = 0;
while(i < listaPeliculas.length){
    if((listaPeliculas[i].endsWith('jpg')) || (listaPeliculas[i].endsWith('jpeg'))){
        document.write('<div class="container_filme">')
        document.write('<img src='+ listaPeliculas[i] +'>');
        document.write('<p>'+ nombrePeliculas[i] +'</p>'); 
      
//Desafío 4 - Colocar títulos debajo de la imagen
        document.write('</div>')
    }else{
        document.write('<p> La imagen ' + i + ' no se leyó porque no es un archivo jpeg o jpg </p>');
    }
    i++;
}
document.write('</div>')