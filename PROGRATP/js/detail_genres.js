// completar con los links
window.addEventListener('load', function() {
    let formulario = document.querySelector('form');
    let buscador = document.querySelector('[name="search"]');
    let aviso = document.querySelector('.aviso')
    formulario.addEventListener('submit', function(e){
        e.preventDefault();
        if( buscador.value == ""){
            aviso.innerText = 'El buscador no puede estar vacío';
        } else {
            this.submit();
        }

    })
    buscador.addEventListener('input', function(){
        aviso.innerText= '';

})

let queryString = location.search 
let queryStringToObject = new URLSearchParams(queryString); 
let id = queryStringToObject.get('id');

//PARA PELICULAS
let urlGeneros = `https://api.themoviedb.org/3/discover/movie?api_key=385115c8e9bd0bc996d46c69d38601de&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${id}&with_watch_monetization_types=flatrate`
    fetch(urlGeneros)
    .then(function(response){
        return response.json()

        })

    .then (function(data){
        console.log(data);
        let generoApi = data.results
        let bContainer= document.querySelector('.contenedorgral');
        let contenidoT= ''
        for (let i =0 ; i<5; i++){
            contenidoT +=
            `<article class="myArticles">
            <a href="detalle-genero.html?id=${generoApi[i].id}">
            <div class="bloque-item-lista">
                <h1 id="tituloGenero" class="titulopelis">${generoApi[i].original_title}</h1>
                <img id="imagenPelicula" class="imagenes" src="https://image.tmdb.org/t/p/w500${generoApi[i].poster_path}" alt="foto1">
                <p id="textoPelicula" class="texto"> ${generoApi[i].overview}</p>
                <p class="estreno">${generoApi[i].release_date} </p>
            </div>
             </a>
            </article>`
            
        }
        console.log(contenidoT);
        bContainer.innerHTML = contenidoT
    
    })
        
            })
    

    .catch(function(error){
        console.log(error);
    })  

//PARA SERIES

let urlGeneros = `https://api.themoviedb.org/3/discover/movie?api_key=385115c8e9bd0bc996d46c69d38601de&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${id}&with_watch_monetization_types=flatrate`
    fetch(urlGeneros)
    .then(function(response){
        return response.json()

        })

    .then (function(data){
        console.log(data);
        let generoApi = data.results
        let bContainer= document.querySelector('.contenedorgral');
        let contenidoT= ''
        for (let i =0 ; i<5; i++){
            contenidoT +=
            `<article class="myArticles">
            <a href="detalle-genero.html?id=${generoApi[i].id}">
            <div class="bloque-item-lista">
                <h1 id="tituloGenero" class="titulopelis">${generoApi[i].original_title}</h1>
                <img id="imagenPelicula" class="imagenes" src="https://image.tmdb.org/t/p/w500${generoApi[i].poster_path}" alt="foto1">
                <p id="textoPelicula" class="texto"> ${generoApi[i].overview}</p>
                <p class="estreno">${generoApi[i].release_date} </p>
            </div>
             </a>
            </article>`
            
        }
        console.log(contenidoT);
        bContainer.innerHTML = contenidoT
    
    })
        


    .catch(function(error){
        console.log(error);
    })  
