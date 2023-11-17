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

app.get('/usuario', (req, res) => {
    let consulta = ''
    if (typeof(req.query.id_usuario) == 'undefined') {
        consulta = `select * from usuario`
    } else {
        consulta = `select * from usuario where id_usuario = ${req.query.id_usuario}`
    }

    connection.query(consulta, (err, results, fields) => {
        // res.json(results)
        if (results.length > 0) {
            res.json(results)
        } else {
            res.json({mensaje: 'No existe un usuario con tal ID. Intente de nuevo'})
        }
    })
})

app.post('/', (req, res) => {
    res.json({ mensaje: " Server Express respondiendo post " })
})

app.delete('/', (req, res) => {
    res.json({ mensaje: " Server Express respondiendo a delete " })
})
