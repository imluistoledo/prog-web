let encabezado = ['Nombre', 'Apellido paterno', 'Apellido materno']
let datos = [
    {
        nombre: "Luis Gerardo",
        apellidoPaterno: "Morales",
        apellidoMaterno: "Toledo"
    },
    {
        nombre: "Clarys Daniela",
        apellidoPaterno: "Garcia",
        apellidoMaterno: "Torres"
    },
    {
        nombre: "Kassandra Paola",
        apellidoPaterno: "Jimenez",
        apellidoMaterno: "Pulido"
    }
]

let elemTabla = document.createElement('table')
let elemEncabezado = document.createElement('thead')
let elemFila = document.createElement('tr')

encabezado.forEach(elemento => {
    let elemTableHead = document.createElement('th')
    elemTableHead.innerText = elemento
    elemFila.appendChild(elemTableHead)
})

elemEncabezado.appendChild(elemFila)
elemTabla.appendChild(elemEncabezado)

let elemCuerpo = document.createElement('tbody')

datos.forEach(dato => {
    let elemFilaCelda = document.createElement('tr')
    // Celda nombre
    let elemCeldaNombre = document.createElement('td')
    elemCeldaNombre.innerText = dato.nombre
    elemFilaCelda.appendChild(elemCeldaNombre)
    // Celda apellido paterno
    let elemCeldaApellidoPaterno = document.createElement('td')
    elemCeldaApellidoPaterno.innerText = dato.apellidoPaterno
    elemFilaCelda.appendChild(elemCeldaApellidoPaterno)
    // Celdo apellido materno
    let elemCeldaApellidoMaterno = document.createElement('td')
    elemCeldaApellidoMaterno.innerText = dato.apellidoMaterno
    elemFilaCelda.appendChild(elemCeldaApellidoMaterno)
    
    elemCuerpo.appendChild(elemFilaCelda)
})

elemTabla.appendChild(elemCuerpo)
// Agregar estilos a la tabla
elemTabla.classList.add('table', 'table-striped', 'table-hover', 'align-middle')

document.getElementById('contenedor').appendChild(elemTabla)