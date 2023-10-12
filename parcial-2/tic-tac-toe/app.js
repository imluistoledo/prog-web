const arrCajas = document.querySelectorAll(".caja")
let turno = 'x'
let estadosJuego = ['', '', '', '', '', '', '', '', '']
// Condiciones para ganar el juego
const condiciones = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

const validarResultado = () => {
    let rondaGanada = false
    for (let i = 0; i < 8; i++) {
        const condicion = condiciones[i] // Elige una condicion del set de condiciones
        // Celda 1, 2 y 3 son las celdas que se consideran ganadoras
        let celda1 = estadosJuego[condicion[0]]
        let celda2 = estadosJuego[condicion[1]]
        let celda3 = estadosJuego[condicion[2]]
        // Si alguna de las celdas esta vacia, no hay combinacion ganadora
        if (celda1 === '' || celda2 === '' || celda3 === '') {
            continue
        }
        if (celda1 === celda2 && celda2 === celda3) {
            rondaGanada = true
            break
        }
    }

    if (rondaGanada) {
        // Codigo para mostrar mensaje en el modal
        rondaGanada = false
        console.log(`Gano el jugador ${turno}`)
        return
    }

    // Verifica que no exista ninguna estado sin jugarse
    let empatoJuego = !estadosJuego.includes('')
    if (empatoJuego) {
        // Codigo para mostrar empate en el modal
        acaboJuego = false
        return
    }
}


arrCajas.forEach(caja => {
    caja.addEventListener("click", (e) => {
        e.stopPropagation()
        let imagenTurno = document.createElement("img")
        imagenTurno.src = `img/${turno}.png`
        
        if (e.target.children.length == 0 && e.target.tagName == "DIV") {
            e.target.appendChild(imagenTurno) // Agrega la imagen al div
            e.target.style.cursor = "not-allowed" // Cambia el cursor a la casilla ocupada
            // Agrega el turno jugado al arreglo de estados del juego
            estadosJuego[e.target.getAttribute('data-cell-index')] = turno
            // Verificar si estado del juego
            validarResultado()
            
            turno == 'x' ? turno = 'o' : turno = 'x' // Intercambia el turno
        }
    })
});

// Reiniciar juego, recarga la pagina
document.querySelector("#btnLimpiar").addEventListener("click", () => window.location.reload())