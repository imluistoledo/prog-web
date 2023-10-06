const arrCajas = document.querySelectorAll(".caja")
let turno = "x"

arrCajas.forEach(caja => {
    caja.addEventListener("click", (e) => {
        // Continuar js
        if (e.target.innerText == "") {
            // Controlas turno
            e.target.innerText = turno // cambiar por imagen
            if (turno == "x") {
                turno = "o"
            }
            else {
                turno = "x"
            }
        }
    })
});