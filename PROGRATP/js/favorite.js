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


//completar

//lista de favoritos

// 1 - recuperar el storage 
let recuperoStorage= localStorage.getItem("contenedorgral");
console.log(recuperoStorage);

//2 - tengo que transformar de JSON a array
let seleccionados = JSON.parse(recuperoStorage);
console.log(seleccionados);

// 3 - captura el contenedor de los elementos a mostrar
let lista= document.querySelector (".contenedorgral");

// 4 - evaluar si el localStorage está vacío quiero indicarle al usuario que no hay favoritos seleccionados
if (seleccionados == null || seleccionados.length == 0){
    lista.innerHTML = `<p> No hay favoritos seleccionados </p>`
} else {
    // pedir a la api los dotos de todos los ids del array de personajes elegidos
    for (let i= 0; i<seleccionados.length; i++){
        buscarYMostrarFavoritos(seleccionados[i])
    }
}

function buscarYMostrarFavoritos (movie_detail){
    //fetch
    let url1= `https://api.themoviedb.org/3/review/${movie_detail}?api_key=e3f1ae8bae04c04c63af7b6996decd02`

    fetch (url1)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log(data);
            lista.innerHTML += `<article>
                            <img src="${data.image}">
                            <p> Nombre: ${data.name}</p>
                            
                            </article>`
        })
        .catch(function(e){
            console.log(e);
        })


}
