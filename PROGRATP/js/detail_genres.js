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

//para peliculas
let urlGeneros2 = "https://api.themoviedb.org/3/genre/movie/list?api_key=385115c8e9bd0bc996d46c69d38601de&language=en-US"
    fetch(urlGeneros2)
    .then(function(response){
        return response.json()

        })

    .then (function(data){
        console.log(data);
        let bContainer= document.querySelector('.contenedorgral');
        let contenidoT= 
            `<article>
            <h2>${data.genres.name}</h2>
            <a href="> 
            </article>`;


            generosPageContainer.innerHTML += contenidoGenerosPage;
        
            })
    

.catch(function(error){
    console.log(error);
})  })

