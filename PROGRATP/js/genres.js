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

//PELICULAS
    let urlGen = "https://api.themoviedb.org/3/movie/{movie_id}?api_key=385115c8e9bd0bc996d46c69d38601de&language=en-US"
    fetch(urlGen)
        .then(function(response){
            return response.json()

    })
    .then(function(data){
        let generos = data.genres;
        console.log(data);
        let seccion = document.querySelector('.contenedorgral');
        for(let i=0; i<generos.length; i++){
            seccion.innerHTML += `<article class="generos"> <a href="./detail-generes.html?id=${generos[i].id}"> ${generos[i].name}</a> </article>`

        }}

    )
    .catch(function (error) {
        console.log(error)
    })

// Para series

let ruta = 'https://api.themoviedb.org/3/genre/tv/list?api_key=5d8d9a4eaf9e1d9b0b7f27344d895a3e&language=es-ES'
fetch(ruta)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);
        let generos = data.genres
        let seccion = document.querySelector(".contenedorgral");
        for (let i = 0; i < generos.length; i++) {
            seccion.innerHTML += `<article class="generos"> 
            <a href="./detail_genres.html?id=${generos[i].id}"> 
            <h4>${generos[i].name}</h4> 
            </article>`

        }}

    )
    .catch(function (error) {
        console.log(error)
    })
})