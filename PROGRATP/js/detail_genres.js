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

    let queryString = location.search 
    let queryStringToObject = new URLSearchParams(queryString); 
    let id = queryStringToObject.get('id');

    //para peliculas

    let urlDetGenero = //link `https://link/${id}`;

    fetch( urlDetGenero )
        .then( function(response){
            return response.json();
        })
        .then(function(data){
            console.log(data);

            let genero = document.querySelector('.pag'); 
            genero.innerText += data.name;
        
            let foto = document.querySelector(".fotoaa");
            foto.src = data.picture_medium;

        //para series
            let urlGeneros2 = //link
            fetch(urlGeneros2)
            .then(function(response){
                return response.json()

                })
                .then(function(data){
                    let info = data.data;
                    console.log(info);
                    let generosPageContainer= document.querySelector('.listas');
                    let contenidoGenerosPage= '';

                    for(let i=0; i<info.length; i++){

                        contenidoGenerosPage +=  `<article class="caja2"> 
                                                    <li class="pequena"> 
                                                    <a href="./detail-artist.html?id=${info[i].id}" class="names">${info[i].name}</a> 
                                                    <a href="./detail-artist.html?id=${info[i].id}"><img class="fotos" src="${info[i].picture_medium}"></img></a> 
                                                    </li>
                                                </article>`
                                                    
                            
                    }


                    generosPageContainer.innerHTML += contenidoGenerosPage;
                
                    })
            

        .catch(function(error){
            console.log(error);
        })  })
})