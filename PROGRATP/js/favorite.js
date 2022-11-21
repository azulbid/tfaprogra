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

let storageRecuperado=localStorage.getItem('pelisfavs')
let peliculas= JSON.parse(storageRecuperado);
console.log(peliculas)

for(let i=0; i<peliculas.length; i++){

    // buscarymostrarfavoritos()
}

function buscarymostrarfavoritos(){
    
let urldetmov = `https://api.themoviedb.org/3/movie/${id}?api_key=385115c8e9bd0bc996d46c69d38601de&language=en-US`

    fetch(urldetmov)
    .then(function(res){
    return res.JSON()
})
.then(function(data){

})

.catch(function(error){
    console.log(error);
})
}