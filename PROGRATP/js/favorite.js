let buscador = document.querySelector('formulario')
let camp = document.querySelector('.buscadortxt')

buscador.addEventListener('submit', function(event) {
    event.preventDefault();
    if (camp.value == '') {
        alert('Ingrese película o serie a buscar')
    }
    else {
        this.submit()
    }
    }
)

let contenedor = document.querySelector('container')
let titulo = document.querySelector('.fav cinco')
let peliculas = [];

if (localStorage.getItem('peliculas') && localStorage.getItem('peliculas') != null){
    peliculas = JSON.parse(localStorage.getItem('peliculas'));
}
else if (peliculas.length == 0){
    titulo.innerHTML = 'No hay favoritos seleccionados'
}
else {
    for (let i = 0; i<peliculas.length; i++) {
        let urlPelis = 
        "https://api.themoviedb.org/3/tv/popular?api_key=hola&language=en-US&page=1"
        + peliculas[i];
        fetch(urlTrack) 
            .then (function(response){
                return response.json();
            })
            .then (function(datos) {
                console.log(datos)
                contenedor.innerHTML += ''

            })
        }}
