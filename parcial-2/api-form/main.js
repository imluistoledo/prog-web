const slcCategorias = document.querySelector('#categorias')
const btnMostrar = document.querySelector('#btnMostrar')
const inpJoke = document.querySelector('#joke')

fetch("https://api.chucknorris.io/jokes/categories")
.then(respuesta => respuesta.json())
.then(categorias => {
    categorias.forEach(categoria => {
        let optCategoria = document.createElement('option')
        optCategoria.value = categoria
        optCategoria.innerText = categoria
        slcCategorias.appendChild(optCategoria)
    })
})

btnMostrar.addEventListener('click', () => {
    fetch(`https://api.chucknorris.io/jokes/random?category=${slcCategorias.value}`)
    .then(respuesta => respuesta.json())
    .then(joke => inpJoke.value = joke.value)
})