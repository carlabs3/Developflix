import peliculas from './peliculas.js'
console.log(peliculas);

const accionContainer = document.getElementById('genero-28');
const thrillerContainer = document.getElementById('genero-53');
const aventuraContainer = document.getElementById('genero-12');

const peliculasAccion = peliculas.filter ((pelicula) => pelicula.genre_ids.includes(28));
const peliculasThriller = peliculas.filter ((pelicula) => pelicula.genre_ids.includes(53));
const peliculasAventuras = peliculas.filter ((pelicula) => pelicula.genre_ids.includes(12));

function cardPelicula (container, sublista) {
    sublista.forEach (pelicula => {
        const card = document.createElement ('div');
        card.classList.add('card');

        const imagen = document.createElement ('img');
        imagen.classList.add('imagen')
        imagen.src = 'https://image.tmdb.org/t/p/w500' + pelicula.poster_path;
        const titulo = document.createElement('h3');
        titulo.textContent = pelicula.title;

        card.appendChild(imagen);
        card.appendChild(titulo);
        container.appendChild(card);
    });

}

cardPelicula(accionContainer, peliculasAccion);
cardPelicula(thrillerContainer, peliculasThriller);
cardPelicula(aventuraContainer, peliculasAventuras);