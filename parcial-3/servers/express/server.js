const express = require('express')
const app = express()
const cors = require('cors')
const mysql = require('mysql2')

app.use(cors())

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'spotify'
})

app.listen(8082, (req, res) => {
    console.log("Servidor express corriendo en puerto 8082")
})

app.get('/album', (req, res) => {
    let consulta = ''
    if (typeof (req.query.id_album) == 'undefined') {
        consulta = `select * from album;`
    } else {
        consulta = `select * from album where id_album = ${req.query.id_album};`
    }

    connection.query(consulta, (err, results, fields) => {
        if (results.length == 0) {
            res.json({
                status: 0,
                mensaje: "No existe un album con tal ID",
                datos: {}
            })
        }
        else {
            res.json({
                status: 1,
                mensaje: "Un album encontrado...",
                campos: results[0]
            })
        }
    })
})

app.post('/', (req, res) => {
    res.json({ mensaje: " Server Express respondiendo post " })
})

app.delete('/', (req, res) => {
    res.json({ mensaje: " Server Express respondiendo a delete " })
})