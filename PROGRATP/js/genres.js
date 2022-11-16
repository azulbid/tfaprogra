window.addEventListener('load', function() {
    let formulario = document.querySelector('form');
    let buscador = document.querySelector('[name="search"]');
    let aviso = document.querySelector('.aviso')
    formulario.addEventListener('submit', function(e){
        e.preventDefault();
        if( buscador.value == ""){
            aviso.innerText = 'El buscador no puede estar vacío';
        } else {
            this.submit();
        }

    })

    buscador.addEventListener('input', function(){
        aviso.innerText= '';

    })

    let urlDetalleG = ''

    fetch(urlDetalleG)
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