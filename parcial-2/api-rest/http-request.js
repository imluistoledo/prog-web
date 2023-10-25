let pagina = 1
const btnAnterior = document.getElementById('btnAnterior')
const btnSiguiente = document.getElementById('btnSiguiente')

btnSiguiente.addEventListener('click', () => {
	if (pagina < 1000) {
		pagina += 1
		cargarPeliculas()
	}
})

btnAnterior.addEventListener('click', () => {
	if (pagina > 1) {
		pagina -= 1
		cargarPeliculas()
	}
})


const cargarPeliculas = () => {
    const peticion = new XMLHttpRequest()
    peticion.timeout = 5000
    peticion.responseType = 'json'
    peticion.open('get', `https://api.themoviedb.org/3/movie/popular?api_key=192e0b9821564f26f52949758ea3c473&language=es-MX&page=${pagina}`)
    peticion.send()

    peticion.addEventListener('readystatechange', () => {
        if (this.readyState === this.DONE) {
            const respuesta = peticion.response

            let peliculas = ''
			respuesta.results.forEach(pelicula => {
				peliculas += `
					<div class="pelicula">
						<img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
						<h3 class="titulo">${pelicula.title}</h3>
					</div>
				`
			})

            document.getElementById('contenedor').innerHTML = peliculas
        }
    })
}

window.onload = cargarPeliculas