const btnSaludo3 = document.querySelector("#btnSaludo3");
const saludar = () => alert("Saludo utilizando las propiedades del nodo en JS usando setAttribute()!");
btnSaludo3.setAttribute("onclick", "saludar()");