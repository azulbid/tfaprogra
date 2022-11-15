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
        let urlTrack = //link 
        + peliculas[i];
        fetch(urlTrack) 
            .then (function(response){
                return response.json();
            })
            .tgen (function(datos) {
                console.log(datos)
                contenedor.innerHTML += ''
// <article class = "textodebusq">
// img src 
// h3
// br
// cierro article
            })
        }}
