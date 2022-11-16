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
let titulo = document.querySelector('.peliculas')
let peliculas = [];

if (localStorage.getItem('peliculas') && localStorage.getItem('peliculas') != null){
    peliculas = JSON.parse(localStorage.getItem('peliculas'));
}
else if (peliculas.length == 0){
    titulo.innerHTML = 'No hay favoritos seleccionados'
}
else {
    for (let i = 0; i<peliculas.length; i++) {
        let urlPelis = "https://api.themoviedb.org/3/tv/top_rated?api_key=3D385115c8e9bd0bc996d46c69d38601de&language=en-US&page=1"
        + peliculas[i];
        fetch(urlPelis) 
            .then (function(response){
              //  let info = data.results
              //  let tContainer= document.querySelector('.peliculas');
              //  let contenidoT= '';

                return response.json();
            })
            .then (function(datos) {
                console.log(datos)
                contenedor.innerHTML += ''

            })
        }}
