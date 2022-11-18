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


let url1 = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=385115c8e9bd0bc996d46c69d38601de&language=en-US`


fetch(url1)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data);
        let info = data.results
        let tContainer= document.querySelector('.contenedorgral');
        let contenidoT= '';

    
        //se crea la info con un for
    for(let i=0; i<info.length; i++){

      
    }
        tContainer.innerHTML += contenidoT
    })
    .catch(function(error){
        console.log(error);
    })  
 
})