/*window.addEventListener('load', function() {
    let formulario = document.querySelector('form');
    let buscador = document.querySelector('[name="search"]'); 
    let aviso = document.querySelector('.aviso')
    formulario.addEventListener('submit', function(e){
        e.preventDefault();
        if( buscador.value === ""){
            aviso.innerText = 'El buscador está vacío';
        } else {
            this.submit();
        }*/


// falta darle formato 
let query = location.search; //location search es toda la url de la pag la guardas en la variable query 
let stringToObject = new URLSearchParams(query); //metes esa variable en el metodo, te devuelve todas las urls de la pag
let aBuscar = stringToObject.get('search'); // agarras search 
let urlm = `https://api.themoviedb.org/3/search/movie?api_key=385115c8e9bd0bc996d46c69d38601de&language=en-US&query=${aBuscar}&page=1&include_adult=false`
let urls = `https://api.themoviedb.org/3/tv/?api_key=385115c8e9bd0bc996d46c69d38601de&language=en-US&query=${aBuscar}&page=1&include_adult=false`

fetch(urlm)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);
        let informacion = data.results
        let container = document.querySelector('.searchresults');
        let Searchtitle = document.querySelector('.titulohp');
        if (informacion.length == 0){
            Searchtitle.innerText = 'No se encontraron resultados'
        }
        else{
            for (let i = 0; i<informacion.length; i++){
                Searchtitle.innerText =  `Resultado de busqueda: ${aBuscar}`
                container.innerHTML  += `
                <a class="search-result" href="./detail_movie.html?id=${informacion[i].id}">
                <article class="pelif">
                    <img class="imagenHP"  src="https://image.tmdb.org/t/p/w500/${informacion[i].poster_path}" alt="imagen">
                    <div class="tituloañoHP">
                        <p class="titulo">${informacion[i].original_title}</p>
                        <p class="año">${informacion[i].release_date}</p>
                    </div>
                </article>`
            }
        }
    })
    .catch(function (error) {
        console.log(error)
    })

fetch(urls)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);
        let informacion = data.results
        let container = document.querySelector('.searchresults');
        let Searchtitle = document.querySelector('.titulohp');
        if (informacion.length == 0){
            Searchtitle.innerText = 'No se encontraron resultados'
        }
        else{
            for (let i = 0; i<informacion.length; i++){
                Searchtitle.innerText =  `Resultado de busqueda: ${aBuscar}`
                container.innerHTML  += `
                <a class="search-result" href="./detail_serie.html?id=${informacion[i].id}">
                <article class="serief">
                    <img class="imagenHP"  src="https://image.tmdb.org/t/p/w500/${informacion[i].poster_path}" alt="imagen">
                    <div class="tituloañoHP">
                        <p class="titulo">${informacion[i].name}</p>
                        <p class="año">${informacion[i].first_air_date}</p>
                    </div>
                </article>`
            }
        }
    })
    .catch(function (error) {
        console.log(error)
    })
    