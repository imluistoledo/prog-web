const arrNiveles = document.querySelectorAll(".bubbling div")
arrNiveles.forEach(nivel => {
    nivel.addEventListener("click", (e) => {
        e.stopPropagation()
        alert(`Has presionado el nivel: ${e.target.className}`)
    })
})