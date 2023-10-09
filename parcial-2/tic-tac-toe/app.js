const arrCajas = document.querySelectorAll(".caja")
let turno = 'x'

arrCajas.forEach(caja => {
    caja.addEventListener("click", (e) => {
        e.stopPropagation()
        let imagenTurno = document.createElement("img")
        imagenTurno.src = `img/${turno}.png`
        
        if (e.target.children.length == 0 &&
            e.target.tagName == "DIV") {
            e.target.appendChild(imagenTurno)
            e.target.style.cursor = "not-allowed"
            
            turno == 'x' ? turno = 'o' : turno = 'x'
        }
    })
});

document.querySelector("#btnLimpiar").addEventListener("click", () => window.location.reload())