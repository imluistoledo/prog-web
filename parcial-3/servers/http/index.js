const http = require('http')

const servidor = http.createServer((req, res) => {
    res.setHeader(`Access-Control-Allow-Origin: *`)
    res.write("Servidor Node Http contestado a peticion get")
    res.end()
})

servidor.listen(8082, () => {
    console.log("Servidor Node Http corriendo en puerto 8082")
})