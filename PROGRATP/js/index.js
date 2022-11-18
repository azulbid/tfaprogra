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


let url1 = "https://api.themoviedb.org/3/movie/popular?api_key=385115c8e9bd0bc996d46c69d38601de&language=en-US&page=1"

fetch(url1)
    .then(function(response){
        return response.json()
    })
    .then(function(data){console.log(data);
        let info = data.results
        let tContainer= document.querySelector('.url1');
        let contenidoT= '';

    for(let i=0; i<info.length; i++){
        contenidoT +=
        `<article class="foto">
        <a href="./detail_movie.html?id=${info[i].id }">
        <img class="foto" src="https://image.tmdb.org/t/p/w500/${info[i].poster_path}" alt="">
        <h4>${info[i].title} </h4>
        <h6<${info[i].release_date} </h6>
        </a>
        </article>`

    }
        tContainer.innerHTML += contenidoT
    })
    .catch(function(error){
        console.log(error);
    })  

})

//latest
let url2 = "https://api.themoviedb.org/3/movie/{movie_id}?api_key=385115c8e9bd0bc996d46c69d38601de&language=en-US"
fetch(url2)
    .then(function(response){
        return response.json()

    })
    .then(function(data){console.log(data);
        let info = data.results
        let tContainer= document.querySelector('.url2');
        let contenidoT= '';

    for(let i=0; i<info.length; i++){
        contenidoT +=
        `<article class="foto">
        <a href="./detail_movie.html?id=${info[i].id }">
        <img  class="foto" src="https://image.tmdb.org/t/p/w500/${info[i].poster_path}" alt="">
        <h4>${info[i].title} </h4>
        <h6<${info[i].release_date} </h6>
        </a>
        </article>`

    }
        tContainer.innerHTML += contenidoT
    })
    .catch(function(error){
        console.log(error);
    })  

// top rated
let url3 = "https://api.themoviedb.org/3/movie/top_rated?api_key=385115c8e9bd0bc996d46c69d38601de&language=en-US&page=1"
fetch(url3)
    .then(function(response){
        return response.json()

    })
    .then(function(data){console.log(data);
        let info = data.results
        let tContainer= document.querySelector('.url3');
        let contenidoT= '';

    for(let i=0; i<info.length; i++){
        contenidoT +=
        `<article class="foto">
        <a href="./detail_movie.html?id=${info[i].id }">
        <img  class="foto" src="https://image.tmdb.org/t/p/w500/${info[i].poster_path}" alt="">
        <h4>${info[i].title} </h4>
        <h6<${info[i].release_date} </h6>
        </a>
        </article>`

    }
        tContainer.innerHTML += contenidoT
    })
    .catch(function(error){
        console.log(error);
    })  

    //upcoming
let url4 = "https://api.themoviedb.org/3/movie/upcoming?api_key=385115c8e9bd0bc996d46c69d38601de&language=en-US&page=1"
fetch(url4)
    .then(function(response){
        return response.json()

    })
    .then(function(data){console.log(data);
        let info = data.results
        let tContainer= document.querySelector('.url4');
        let contenidoT= '';

    for(let i=0; i<info.length; i++){
        contenidoT +=
        `<article class="foto">
        <a href="./detail_movie.html?id=${info[i].id }">
        <img  class="foto" src="https://image.tmdb.org/t/p/w500/${info[i].poster_path}" alt="">
        <h4>${info[i].title} </h4>
        <h6<${info[i].release_date} </h6>
        </a>
        </article>`

    }
        tContainer.innerHTML += contenidoT
    })
    .catch(function(error){
        console.log(error);
    })  
//SERIES
//tv on the air
let url5 = "https://api.themoviedb.org/3/tv/on_the_air?api_key=385115c8e9bd0bc996d46c69d38601de&language=en-US&page=1"
fetch(url5)
    .then(function(response){
        return response.json()

    })
    .then(function(data){console.log(data);
        let info = data.results
        let tContainer= document.querySelector('.url5');
        let contenidoT= '';

    for(let i=0; i<info.length; i++){
        contenidoT +=
        `<article class="foto">
        <a href="./detail_serie.html?id=${info[i].id }">
        <img  class="foto" src="https://image.tmdb.org/t/p/w500/${info[i].poster_path}" alt="">
        <h4>${info[i].name} </h4>
        <h6<${info[i].release_date} </h6>
        </a>
        </article>`

    }
        tContainer.innerHTML += contenidoT
    })
    .catch(function(error){
        console.log(error);
    })  


//popular
let url7 = "https://api.themoviedb.org/3/tv/latest?api_key=385115c8e9bd0bc996d46c69d38601de&language=en-US"
fetch(url7)
    .then(function(response){
        return response.json()

    })
    .then(function(data){console.log(data);
        let info = data.results
        let tContainer= document.querySelector('.url7');
        let contenidoT= '';

    for(let i=0; i<info.length; i++){
        contenidoT +=
        `<article class="foto">
        <a href="./detail_serie.html?id=${info[i].id }">
        <img class="foto" src="https://image.tmdb.org/t/p/w500/${info[i].poster_path}" alt="">
        <h4>${info[i].name} </h4>
        <h6<${info[i].release_date} </h6>
        </a>
        </article>`

    }
        tContainer.innerHTML += contenidoT
    })
    .catch(function(error){
        console.log(error);
    })  