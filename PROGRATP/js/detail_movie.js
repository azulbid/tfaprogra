//let urldetalle = `https://api.themoviedb.org/3/movie/${movie_detail}?api_key=e3f1ae8bae04c04c63af7b6996decd02&language=en-US`
let urldetalle = `https://api.themoviedb.org/3/review/${movie_detail}?api_key=e3f1ae8bae04c04c63af7b6996decd02
`

fetch(urldetalle)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        //console.log(data);
        

        let image = document.querySelector('imagen-detalle');
        image.src += data.albun_cover_medium;

        let titulo = document.querySelector(`titulos-detail`);
        titulo.innerText= data.title;

        let genero = document.querySelector(`generos`);
        genero.innerText
    })
    .catch (function(e){
        console.log(e);
    })