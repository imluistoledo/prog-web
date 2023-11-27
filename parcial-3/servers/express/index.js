// Este es el server para el delete
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

app.listen(8083, (req, res) => {
    console.log("Servidor express corriendo en puerto 8083")
})

app.get('/cancion', (req, res) => {
    let consulta = ''
    if (typeof(req.query.id_cancion) == 'undefined') {
        consulta = `
        select 
            C.id_cancion as 'Cancion ID',
            C.nombre_cancion as 'Nombre',
            C.duracion_min as 'Duracion',
            C.letra as 'Letra'
        from
            cancion as C;
        `
    } else {
        consulta = `
        select 
            C.id_cancion as 'Cancion ID',
            C.nombre_cancion as 'Nombre',
            C.duracion_min as 'Duracion',
            C.letra as 'Letra'
        from
            cancion as C
        where C.id_cancion = ${req.query.id_cancion};
        `
    }

    connection.query(
        consulta,
        function (err, results, fields) {
            if (results.length == 0) {
                res.json({
                    status: 0,
                    mensaje: "El id de la cancion no existe...",
                    datos: {}
                });
            }
            else {
                res.json({
                    status: 1,
                    mensaje: "Se encontro una cancion...",
                    campos: results[0]
                });
            }

        }
    )
})

app.post('/', (req, res) => {
    res.json({ mensaje: " Server Express respondiendo post " })
})

app.delete('/cancion', (req, res) => {
    let consulta = ''
    if (typeof(req.query.id_cancion) == 'undefined') {
        /// No se incluyo el id
    } else {
        consulta = `delete from cancion where cancion.id_cancion = ${req.query.id_cancion}`
    }

    connection.query(
        consulta,
        function (err, results, fields) {
            if (results.length == 0) {
                res.json({
                    status: 0,
                    mensaje: "El id del album no existe...",
                    datos: {}
                });
            }
            else {
                res.json({
                    status: 1,
                    mensaje: "Se encontro un album...",
                    campos: results[0]
                });
            }

        }
    )
})