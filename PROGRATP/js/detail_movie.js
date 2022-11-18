window.addEventListener('load', function() {
    let formulario = document.querySelector('form');
    let buscador = document.querySelector('[name="search"]'); 
    let aviso = document.querySelector('.aviso')
    formulario.addEventListener('submit', function(e){
        e.preventDefault();
        if( buscador.value === ""){
            aviso.innerText = 'El buscador está vacío';
        } else {
            this.submit();
        }

    })

    buscador.addEventListener('input', function(){
        aviso.innerText= '';

    })


let urldetmov = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=385115c8e9bd0bc996d46c69d38601de&language=en-US`


fetch(urldetmov)
    .then(function(response){
        return response.json()
    })
    .then (function(data){
        console.log(data);
        let info = data.results
        let bContainer= document.querySelector('.detmovie1');
        let contenidoT= '';

    for(let i=0; i<info.length; i++){
            contenidoT +=
            `<article class="foto">
            <a href="./detail_movie.html?id=${info[i].id }">
            <img  class="foto" src="https://image.tmdb.org/t/p/w500/${info[i].poster_path}" alt="">
            <h4>${info[i].title} </h4>
            <h6<${info[i].release_date} </h6>
            </a>
            </article>`
    
        }
      
    }
       , bContainer.innerHTML += contenidoT
    ,
        )
    .catch(function(error){
        console.log(error);
    })
})