const Asignatura = require('../models/asignatura.model')//importa el modelo de mongoose
const express = require('express')
const router = express.Router()


router.get('/', async(req,res)=>{
    try{
        const asignatura = await Asignatura.find()
        res.json(asignatura)
    }catch(error){
        res.status(500)
        res.json({msg: 'Há ocurrido un fallo'})
    }

})

router.post('/', async (req,res)=>{
    try{
       //console.log(req.body)
        const nuevaAsignatura = new Asignatura({
            nombre: req.body.nombre,   // recordar que aqui tiene que ir lo que va en el MODELO
        })
        await nuevaAsignatura.save()
        res.json(nuevaAsignatura)
    }catch (error){
        res.status(500)
        res.json({msg: 'Há ocurrido un fallo'}) 
    }
})

router.delete('/:id', async (req,res)=>{
    try {
        //await Asignatura.deleteOne({_id: req.params.id})
       const result = await Asignatura.findByIdAndDelete(req.params.id)
        res.json({msg: 'result'})

    } catch (error) {
        res.status(500)
        res.json({msg: 'Há ocurrido un fallo'}) 
    }
})

module.exports = router