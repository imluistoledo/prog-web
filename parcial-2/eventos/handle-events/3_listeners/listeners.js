// NODOS AUTOMATICOS
btnSaludo1.addEventListener("click", function() {
    alert("Saludo con la funcion dentro del listener!")
})



























// Funcion fuera del listener
const saludar = () => {
    alert("Saludo con la funcion fuera del listener!")
}
btnSaludo2.addEventListener("click", saludar);























// Multiples listeners
const saludo = () => {
    alert("Saludo utilizando multiples listeners!")
}
const estilos = () => {
    btnSaludoMultiple1.classList.toggle("bg")
}
// Mismo evento, dos funciones distintas
btnSaludoMultiple1.addEventListener("click", saludo)
btnSaludoMultiple1.addEventListener("click", estilos)

// Mismo evento a multiples elementos
const arrBtnSaludoMultiple = document.querySelectorAll(".btnSaludo")
arrBtnSaludoMultiple.forEach(btnSaludo => {
    btnSaludo.addEventListener("click", saludo)
    btnSaludo.addEventListener("click", (e) => {
        alert(`Click en el boton ${e.target.id}`)
    })
});