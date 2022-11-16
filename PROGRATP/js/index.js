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


let url = "https://api.themoviedb.org/3/movie/popular?api_key=385115c8e9bd0bc996d46c69d38601de&language=en-US&page=1"

fetch(url)
    .then(function(response){
        return response.json()

    })
    .then(function(data){console.log(data);
        let info = data.results
        let tContainer= document.querySelector('.pelisyseriestop');
        let contenidoT= '';

    for(let i=0; i<info.length; i++){
        contenidoT +=
        `<ul class="caja"> 
        <a href="./detail_movie.html?id=${info[i].id }"> 
        </a> 
        <a href="./detail_movie.html"class="names">${info[i].title}</a>  
        <a href=".detail_movie.html"></a> 
        "class="names">${info[i].title}</a> 
        </li>`
    }
        tContainer.innerHTML += contenidoT
    })
    .catch(function(error){
        console.log(error);
    })  

//let url2 = "https://api.themoviedb.org/3/tv/top_rated?api_key=3D385115c8e9bd0bc996d46c69d38601de&language=en-US&page=1"

/*fetch(url2)
    .then(function(response){
    return response.json()
    
    })
    .then(function(data){
        let info = data.results
        console.log(info);
        let pContainer= document.querySelector('.pelisyseriestop');
        let contenidoP= '';

        for(let i=0; i<info.length; i++){
            contenidoP += `<li class="caja">
            <a href="./detail_movie.html?id=${info[i].id}" >
            <img class="fotos" src="./detail_genres.html?id=${info[i].poster_path}"></img>
            </a>
            <a href="./detail_serie.html?id=${info[i].id}" class="names">${info[i].original_title}</a>
            <a href="./detail_genres.html?id=${info[i].id}"class="names">by ${info[i].original_title}</a>
            </li>`
            } 
            pContainer.innerHTML += contenidoP
    })
    .catch(function(error){
            console.log(error);
        })  
    })   */

    let url3 = "https://api.themoviedb.org/3/movie/popular?api_key=385115c8e9bd0bc996d46c69d38601de&language=en-US&page=1"

    fetch(url3)
        .then(function(response){
            return response.json()

        })
        .then(function(data){console.log(data);
            let info = data.results
            let tContainer= document.querySelector('.pelisyseriestop');
            let contenidoT= '';

        for(let i=0; i<info.length; i++){
            contenidoT +=
            `<ul class="caja"> 
            <a href="./detail_movie.html?id=${info[i].id }"> 
            <img class="fotos" src= ${info[i]}"></img> </a> 
            <a href="./detail_movie.html"class="names">${info[i].title}</a>  
            <a href=".detail_movie.html"></a> 
           "class="names">${info[i].title}</a> 
            </li>`
        }
            tContainer.innerHTML += contenidoT
        })
        .catch(function(error){
            console.log(error);
         })  
        })



let url = "https://api.themoviedb.org/3/movie/top_rated?api_key=385115c8e9bd0bc996d46c69d38601de&language=en-US&page=1"

fetch(url)
    .then(function(response){
        return response.json()

    })
    .then(function(data){console.log(data);
        let info = data.results
        let tContainer= document.querySelector('.pelisyseriestop');
        let contenidoT= '';

    for(let i=0; i<info.length; i++){
        contenidoT +=
        `<ul class="caja"> 
        <a href="./detail_movie.html?id=${info[i].id }"> 
        </a> 
        <a href="./detail_movie.html"class="names">${info[i].title}</a>  
        <a href=".detail_movie.html"></a> 
        "class="names">${info[i].title}</a> 
        </li>`
    }
        tContainer.innerHTML += contenidoT
    })
    .catch(function(error){
        console.log(error);
    })  