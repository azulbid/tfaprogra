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

    let urlGen = "https://api.themoviedb.org/3/genre/movie/list?api_key=385115c8e9bd0bc996d46c69d38601de&language=en-US"

    fetch(urlGen)
    .then(function(response){
        return response.json()

    })
    .then(function(data){
        let info = data.data;
        console.log(info);
        let generosPageContainer= document.querySelector('.listas');
        let contenidoGenerosPage= '';

        for(let i=0; i<info.length; i++){
            contenidoGenerosPage +=   ` <article class="caja"> 
                                        <li> 
                                        <a href="./detail-genres.html" class="names">${info[i].name}</a> 
                                        <a href="./detail-genres.html?id=${info[i].id}">
                                        <img class="fotos" src="${info[i].img}" alt="FOTO GENERO LATINO"></a>
                                        </li>
                                        </article>`
                
        }
        generosPageContainer.innerHTML += contenidoGenerosPage
    })  
    .catch( function(error){
        console.log(error);
    })

})