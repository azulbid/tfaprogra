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


    let url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=385115c8e9bd0bc996d46c69d38601de&language=en-US&page=1'

    fetch(url)
        .then(function(response){
            return response.json()

        })
        .then(function(data){
            let info = data.data
            console.log(data);
            let tContainer= document.querySelector('.listas');
            let contenidoT= '';

        for(let i=0; i<info.length; i++){
            contenidoT +=
            `<li class="caja"> 
            <a href="./detail_movie.html?id=${info[i].id }"> 
            <img class="fotos" src=""></img> </a> 
            <a href="./detail_movie.html"class="names">${info[i].title}</a>  
            <a href=".playlists.html"></a> 
            <a href="./detail-artist.html?id=${info[i].artist.id}"class="names">${info[i].artist.name}</a> 
            </li>`
        }
            tContainer.innerHTML += contenidoT
        })
        .catch(function(error){
            console.log(error);
        })  

let url2 = "https://api.themoviedb.org/3/tv/top_rated?api_key=3D385115c8e9bd0bc996d46c69d38601de&language=en-US&page=1"

fetch(url2)
        .then(function(response){
            return response.json()

        })
        .then(function(data){
            let info = data.data
            console.log(info);
            let pContainer= document.querySelector('.peliculas');
            let contenidoP= '';

        for(let i=0; i<info.length; i++){
                contenidoP += `<li class="caja">
                <a href="./detail_movie.html?id=${info[i].id}" >
                    <img class="fotos" src=""></img>
                </a>
                <a href="./detail_serie.html?id=${info[i].id}" class="names">${info[i].title}</a>
                <a href="./detail_genres.html?id=${info[i].results.id}"class="names">by ${info[i].results.name}</a>
            </li>`
            } 
            pContainer.innerHTML += contenidoP
        })
            .catch(function(error){
                console.log(error);
            })  
        })   

