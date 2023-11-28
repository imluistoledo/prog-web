// Este es el server para el delete
const express = require('express')
const app = express()
const cors = require('cors')
const mysql = require('mysql2')
const bodyParser = require('body-parser')
const multer = require('multer')
const upload = multer()

app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

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
    if (typeof (req.query.id_cancion) == 'undefined') {
        consulta = `
        select 
            C.id_cancion as 'CancionID',
            C.nombre_cancion as 'Nombre',
            C.duracion_min as 'Duracion',
            C.letra as 'Letra'
        from
            cancion as C;
        `
    } else {
        consulta = `
        select 
            C.id_cancion as 'CancionID',
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
                })
            }
            else {
                res.json({
                    status: 1,
                    mensaje: "Se encontro una cancion...",
                    campos: results[0]
                })
            }

        }
    )
})

app.post('/enviar', upload.none(), (req, res) => {
    // let id_cancion = req.body.id
    let nombre = req.body.nombre.replace(/'/g, '')
    let duracion = req.body.duracion.replace(/'/g, '')
    let letra = req.body.letra.replace(/'/g, '')
    let consulta = `
        insert into cancion (id_artista, id_album, nombre_cancion, duracion_min, letra)
        values (
            1, 1, '${nombre}', '${duracion}', '${letra}'
        )`
    connection.query(consulta, (err, results, fields) => {
        if (results.affectedRows > 0 && typeof(results.affectedRows) != 'undefined') {
            res.json({
                status: 1,
                mensaje: 'Cancion insertada'
            })
        }
        else {
            res.json({
                status: 0,
                mensaje: 'No fue posible insertar la cancion'
            })    
        }
    })
    // res.json({
    //     status: 1,
    //     mensaje: `Cancion recibida: ${id_cancion}, ${nombre}, ${duracion}, ${letra}`
    // })
})

app.delete('/cancion', (req, res) => {
    let eliminarCancion = ''
    let revPlaylistCont = ''
    let eliminarPlaylistCont = ''

    if (typeof (req.query.id_cancion) == 'undefined') {
        res.json({
            status: 0,
            mensaje: "Falto enviar ID",
            datos: {}
        })
    }
    else {
        revPlaylistCont = `select * from playlist_cont where id_cancion=${req.query.id_cancion}`
    }

    connection.query(
        revPlaylistCont,
        function (err, results, fields) {
            if (results.length == 0) {
                // No existe playlist con tal cancion, borra la cancion unicamente
                eliminarCancion = `delete from cancion where id_cancion = ${req.query.id_cancion};`
                console.log(eliminarCancion)
                fnEliminarCancion(eliminarCancion)
            }
            else {
                // Hay canciones en la playlist
                eliminarPlaylistCont = `delete from playlist_cont where id_cancion = ${req.query.id_cancion};`
                fnEliminarCancion(eliminarPlaylistCont)
                eliminarCancion = `delete from cancion where id_cancion = ${req.query.id_cancion};`
                fnEliminarCancion(eliminarCancion)
                console.log(eliminarCancion)
            }
        }
    )
    const fnEliminarCancion = (consulta) => {
            connection.query(consulta, function (err, results, fields) {
                if (results.affectedRows == 1) {
                    res.json({
                            status: 1,
                            mensaje: "Cancion eliminada correctamente",
                            datos: {}
                        }
                    )
                }
                else {
                    res.json({
                            status: 0,
                            mensaje: "No se ha eliminado ninguna cancion",
                            datos: {}
                        }
                    )
                }
            }
        )
    }
})