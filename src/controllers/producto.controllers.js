import Receta from "../models/receta";




export const crearReceta = async(req,res)=>{
     try {
        const nuevaReceta = new Receta(req.body)
        await nuevaReceta.save()
        res.status(201).json({
            mensaje:"el producto se creo correctamente"
        })
     } catch (error) {
        console.log(error)
        res.status(404).json({
            mensaje:"error al intentar crear el producto"
        })
     }
}