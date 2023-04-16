const express = require('express')
const router = express.Router()
const {obtenerTdos} = require('../controllers/alumno.controller')




/* router.get('/', async(req,res)=>{
    try{
        let alumnos = []
        const filtros = []
        for(const i in req.query){
            filtros.push({
                [i]: req.query[i]
            })
        }

        if(filtros.length){
            alumnos = await Alumno.find({$and:filtros})// and a diferencia de OR 
        }
        else{
            alumnos = await Alumno.find()
        }

        res.json(alumnos)
    }catch(error){
        res.status(500)
        res.json({msg: 'Há ocurrido un fallo'})
    }

}) */

router.get('/:dni', async(req,res)=>{
    try{
        const alumnos = await obtenerTdos()
        res.json(alumnos)
    }catch(error){
        res.status(500)
        res.json({msg: 'Há ocurrido un fallo'})
    }

})

router.post('/', async (req,res)=>{
    try{
        console.log(req.body)
        const nuevoAlumno = new Alumno({
            nombre: req.body.nombre,
            dni: req.body.dni,
            edad: req.body.edad
        })
        await nuevoAlumno.save()
        res.json(nuevoAlumno)
    }catch (error){
        res.status(500)
        res.json({msg: 'Há ocurrido un fallo'}) 
    }
})
router.patch('/:id', async(req,res)=>{
    try{
        await Alumno.findByIdAndUpdate(req.params.id,req.body)
        res.json({msg:'SAO QUASE AS DEZ DA NOITE, NINBUEM MERECE'})

    } catch (error){
        res.status(500)
        res.json({msg: 'Há ocurrido un fallo'}) 
    }

})


module.exports = router