window.addEventListener('load', function(){
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
{buscador.addEventListener('input', function(){
        aviso.innerText= '';

    })}
    

let qsString = location.search
let qs2 = new URLSearchParams(qsString)
//qs2 = {id= 43270}
let id = qs2.get("id")
console.log(id);


let urldetmov = `https://api.themoviedb.org/3/movie/${id}?api_key=385115c8e9bd0bc996d46c69d38601de&language=en-US`


fetch(urldetmov)
    .then(function(response){
        return response.json()
    })
    .then (function(data){
        console.log(data);
        let bContainer= document.querySelector('.detmovie1');
        let contenidoT= 
        `<article>
        <h2>${data.title}</h2>
        <img src="https://image.tmdb.org/t/p/w500/${data.poster_path}" alt="">
        <h4> Estreno: ${data.release_date} </h4>
        <h4> Idioma original: ${data.original_language} </h4>
        <h4> Puntuación: ${data.vote_average} </h4>
        <h4> Resumen: ${data.overview}
        </article>`;


       bContainer.innerHTML += contenidoT
    })

    .catch(function(error){
        console.log(error);
 })   
 

  
  

    let queryString = location.search; //Obtengo la QS
    let queryStringToObject = new URLSearchParams(queryString); //La trasnformo en OL
    let ids= queryStringToObject.get('id'); //Obtengo los datos de una propiedad con get(

let favoritos=[];


let storageRecuperado= localStorage.getItem('.favoritos');
    if (storageRecuperado != null){
    
    favoritos= JSON.parse(storageRecuperado);
    console.log(favoritos);
    }

let link = document.querySelector('.clave');

    if (favoritos.includes(ids)){
        link.innerText="sacar de favoritos"
    };
    console.log(link);

link.addEventListener('click', function(e){
    e.preventDefault();

    if (favoritos.includes(ids)){

        let indice=favoritos.indexOf(ids);

        favoritos.splice(indice, 1)

        link.innerText="agregar a favoritos";
    }
    
    else{
        favoritos.push(ids);
        console.log(favoritos)
        link.innerText="sacar de favoritos"
    };
let personajesFavoritosToString= JSON.stringify(favoritos);
localStorage.setItem("favoritos", personajesFavoritosToString);
console.log(localStorage);
})

 
})
