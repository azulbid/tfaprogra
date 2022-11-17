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


let url1 = "https://api.themoviedb.org/3/movie/popular?api_key=385115c8e9bd0bc996d46c69d38601de&language=en-US&page=1"

fetch(url1)
    .then(function(response){
        return response.json()

    })
    .then(function(data){console.log(data);
        let info = data.results
        let tContainer= document.querySelector('.pelisyseriestop');
        let contenidoT= '';

    for(let i=0; i<info.length; i++){
        contenidoT +=
        `<ul class="caja"> 
        <a href="./detail_movie.html?id=${info[i].id }">
        <img class="foto" src="https://image.tmdb.org/t/p/w500/${info[i].poster_path}" alt="imagen"> 
        </a> 
        <a href="./detail_movie.html"class="names">${info[i].title}</a>  
        <a href=".detail_movie.html"></a> 
       "class="names">${info[i].title}</a> 
        </li>`
      
    }
        tContainer.innerHTML += contenidoT
    })
    .catch(function(error){
        console.log(error);
    })  
}) 



//let urldetalle = `https://api.themoviedb.org/3/movie/${movie_detail}?api_key=e3f1ae8bae04c04c63af7b6996decd02&language=en-US`

//let urldetalle = `https://api.themoviedb.org/3/review/${movie_detail}?api_key=e3f1ae8bae04c04c63af7b6996decd02
//`

//fetch(urldetalle)
  //  .then(function(response){
    //    return response.json()
    //})
  //  .then(function(data){
        //console.log(data);
        

        //let image = document.querySelector('imagen-detalle');
      //  image.src += data.albun_cover_medium;

        //let titulo = document.querySelector(`titulos-detail`)
        // titulo.innerText= data.title;

        

   // })
   // .catch (function(e)
