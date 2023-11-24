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

app.get('/album', (req, res) => {
    let consulta = ''
    if (typeof(req.query.id_album) == 'undefined') {
        consulta = `
        select 
            artista.nombre as 'NombreArtista',
            artista.apellido as 'ApellidoArtista',
            album.nombre_album as 'Album',
            album.genero as 'Genero', 
            album.fecha_lanzamiento as 'Lanzamiento' 
        from 
            album 
            join artista on (album.id_artista = artista.id_artista);
        `
    } else {
        consulta = `
        select 
            artista.nombre as 'Nombre del artista',
            artista.apellido as 'Apellido del artista',
            album.nombre_album as 'Album',
            album.genero as 'Genero', 
            album.fecha_lanzamiento as 'Fecha de lanzamiento' 
        from 
            album 
            join artista on (album.id_artista = artista.id_artista)
        where album.id_album = ${req.query.id_album};
        `
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

app.post('/', (req, res) => {
    res.json({ mensaje: " Server Express respondiendo post " })
})

app.delete('/', (req, res) => {
    res.json({ mensaje: " Server Express respondiendo a delete " })
})