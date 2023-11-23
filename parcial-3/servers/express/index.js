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
            artista.nombre as 'NombreArtista',
            artista.apellido as 'ApellidoArtista',
            album.nombre_album as 'Album',
            album.genero as 'Genero', 
            album.fecha_lanzamiento as 'Lanzamiento' 
        from 
            album 
            join artista on (album.id_artista = artista.id_artista)
        where album.id_album = ${req.query.id_album};
        `
    }

    connection.query(consulta, (err, results, fields) => {
        res.send(results)
    })
})

app.post('/', (req, res) => {
    res.json({ mensaje: " Server Express respondiendo post " })
})

app.delete('/', (req, res) => {
    res.json({ mensaje: " Server Express respondiendo a delete " })
})