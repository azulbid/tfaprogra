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
})

//favoritos

let storageRecuperado = localStorage.getItem('pelisfavs');

let peliculas = JSON.parse(storageRecuperado);


let favoritos = document.querySelector(".favoritos");

if (peliculas == null || peliculas.length == 0 ){
    favoritos.innerHTML = `<p>No hay favoritos seleccionados</p>`
}else{
    for (let i = 0 ; i < peliculas.length; i++){
        buscarymostrarfavoritos(peliculas[i])
    }
}

function buscarymostrarfavoritos(id){
    let urldetmov = `https://api.themoviedb.org/3/movie/${id}?api_key=385115c8e9bd0bc996d46c69d38601de&language=en-US`

    fetch(urldetmov)
        .then(function(res){
        return res.json()
    })
    .then(function(data){
        console.log(data);
        favoritos.innerHTML += `
        <a href="./detail_movie.html?id=${data.id}">
            <img src="https://image.tmdb.org/t/p/w500/${data.poster_path}" alt="">
            <h2>${data.title}</h2>
        </a>
        ` 

    })

    .catch(function(error){
        console.log(error);
    })
}