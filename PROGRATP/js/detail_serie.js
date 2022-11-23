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

let qsString = location.search
let qs2 = new URLSearchParams(qsString)
let id = qs2.get("id")
console.log(id);

let url = `https://api.themoviedb.org/3/tv/${id}?api_key=385115c8e9bd0bc996d46c69d38601de&language=en-US`


fetch(url)
    .then(function(response){
        return response.json()
    })
    .then (function(data){
        console.log(data);
        let bContainer= document.querySelector('.contdetserie');
        let contenidoT= 
        `<article>  
        <h2>${data.name}</h2>
        <img src="https://image.tmdb.org/t/p/w500/${data.poster_path}" alt="">
        <h4> Estreno: ${data.first_air_date} </h4>
        <h4> Idioma original: ${data.original_language} </h4>
        <h4> Puntuación: ${data.vote_average} </h4>
        <h4> Resumen: ${data.overview}
        </article>`;


       bContainer.innerHTML += contenidoT
    })

    .catch(function(error){
        console.log(error);
 })   


// favoritos
let favoritos=[]


//  si ya hay favoritos

let storageRecuperado=  localStorage.getItem('pelisfavs');

    if (storageRecuperado != null){
    
        favoritos = JSON.parse(storageRecuperado);
       console.log(favoritos);
    }


let boton= document.querySelector('.botoncito');   

//si el id esta en el array cambiamos el texto del boton
if (favoritos.includes(id)){
     boton.innerText="sacar de favoritos"
     };


boton.addEventListener('click', function(){
     
 

    // chequear si el id ya esta lista y cambiar el texto del boton

    if (favoritos.includes(id)){
        let indicepelicula=favoritos.indexOf(id);
        favoritos.splice(indicepelicula, 1)
        boton.innerText="agregar a favoritos "; 
    } else{
    // guardar el id del personaje en el array
    favoritos.push(id);
    boton.innerText= 'quitar de favoritos';
    }
  

    // Guardar datos en local storage
    let favsTostring = JSON.stringify(favoritos)
    localStorage.setItem('pelisfavs', favsTostring)
    console.log(localStorage);

})

 
 })
