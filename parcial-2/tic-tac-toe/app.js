const arrCajas = document.querySelectorAll(".caja")
let turno = "x"

arrCajas.forEach(caja => {
    caja.addEventListener("click", (e) => {
        // Continuar js
        if (e.target.innerText == "") {
            // Controlar turno
            e.target.innerText = turno // cambiar por imagen
            if (turno == "x") {
                //turno = "o"
                e.target.classList.remove("o")
                e.target.classList.add("x")
                turno = "o"
            }
            else {
                //turno = "x"
                e.target.classList.remove("x")
                e.target.classList.add("o")
                turno = "x"
            }
        }
    })
});