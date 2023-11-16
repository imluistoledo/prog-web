const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())

app.get('/clientes', (req, res) => {
    res.json({ mensaje: " Server Express respondiendo a get" })
})

app.post('/clientes', (req, res) => {
    res.json({ mensaje: " Server Express respondiendo post " })
})

app.delete('/clientes', (req, res) => {
    res.json({ mensaje: " Server Express respondiendo a delete " })
})

app.listen(8082, (req, res) => {
    console.log("Servidor express corriendo en puerto 8082")
})