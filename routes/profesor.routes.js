const Profesor = require('../models/profesor.model')//importa el modelo de mongoose
const express = require('express')
const router = express.Router()


router.get("/", async(req,res)=>{
    try{
        const resultado = await Profesor.find()
        res.json(resultado)
    }catch (error){
        res.status(500)
        res.json({msg: 'Há ocurrido un fallo'})
    }
})

router.post('/', async (req,res)=>{
    try{
        console.log(req.body)
        const nuevoProfesor = new Profesor({
            nombre: req.body.nombre,
            apellidos: req.body.apellidos,
        })
        await nuevoProfesor.save()
        res.json(nuevoProfesor)
    }catch (error){
        res.status(500)
        res.json({msg: 'Há ocurrido un fallo'}) 
    }
})

router.delete('/:id', async(req,res)=>{
    try{
        await Profesor.findByIdAndDelete(req.params.id)
        res.json({msg: 'Eliminado!'})
    }catch (error){
        res.status(500)
        res.json({msg: 'Há ocurrido un fallo'}) 
    }
})

router.put('/:id', async(req,res)=>{
    try{
        const resultado = await Profesor.replaceOne({_id: req.params.id}, req.body)
        res.json(resultado)    
    }catch(error){
        res.status(500)
        res.json({msg: 'Há ocurrido un fallo'})
    }
})

router.patch('/:id', async(req,res)=>{
    try{
        await Profesor.findByIdAndUpdate(req.params.id,req.body)
        res.json({msg:'AINDA É CEDO, MÁS É DOMINGO'})

    } catch (error){
        res.status(500)
        res.json({msg: 'Há ocurrido un fallo'}) 
    }

})


module.exports = router