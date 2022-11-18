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
//qs2 = {id= 43270}
let pepe = qs2.get("id")
console.log(pepe);


let urldetmov = `https://api.themoviedb.org/3/movie/${pepe}?api_key=385115c8e9bd0bc996d46c69d38601de&language=en-US`


fetch(urldetmov)
    .then(function(response){
        return response.json()
    })
    .then (function(data){
        console.log(data);
        
        let bContainer= document.querySelector('.detmovie1');
        let contenidoT= '';
      
    
       bContainer.innerHTML += contenidoT
    }
<<<<<<< HEAD
{(        tContainer.innerHTML += contenidoT
    })
    .catch(function(error){
        console.log(error);
    })  
 
})
  
  
let favoritos=[];


let storageRecuperado= localStorage.getItem(".favoritos");

    if (storageRecuperado != null){
    
    favoritos= JSON.parse(storageRecuperado);
    console.log(favoritos);
    }

let link = document.querySelector(".clave");

    if (favoritos.includes(id)){
        link.innerText="sacar de favoritos"
    };
    console.log(link);

link.addEventListener("click", function(e){
    e.preventDefault();

    if (favoritos.includes(id)){

        let indice=favoritos.indexOf(id);

        favoritos.splice(indice, 1)

        link.innerText="agregar a favoritos";
    }
    
    else{
        favoritos.push(id);
        console.log(favoritos)
        link.innerText="sacar de favoritos"
    };
let personajesFavoritosToString= JSON.stringify(favoritos);
localStorage.setItem("favoritos", personajesFavoritosToString);
console.log(localStorage);
})
=======
        )
    .catch(function(error){
        console.log(error);
    })
})
>>>>>>> d5639e25da37e8f690efb9c2a28e1e104aa4b188
