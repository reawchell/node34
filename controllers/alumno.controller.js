const Alumno = require('../models/alumno.model')//importa el modelo de mongoose

async function obtenerTdos(){
    const alumnos = await Alumno.findOne({dni: req.params.dni})
    return alumnos
}

module.exports = {
    obtenerTdos,
}
