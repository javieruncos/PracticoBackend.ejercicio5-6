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



export const listarRecetas = async(req,res)=>{
  try {
      const listaRecetas = await Receta.find()
      res.status(200).json(listaRecetas)
  } catch (error) {
    console.log(error)
    res.status(404).json({
        mensaje:"error al cargar el producto"
    })
  }
}




export const obtenerProducto = async(req,res)=>{
       try {
          const recetaBuscada = await Receta.findById(req.params.id)
          res.status(200).json(recetaBuscada)
       } catch (error) {
         res.status(404).json({
            mensaje:"error al buscar el producto"
         })
       }
}



export const editarReceta =async (req,res)=>{
       try {

         await Receta.findByIdAndUpdate(req.params.id,req.body)
          res.status(200).json({
            mensaje:"el producto fue correctamente editado"
          })

       } catch (error) {
        console.log(error)
        res.status(404).json({
           mensaje:"error al intentar editar el producto"
        })
       }
} 




export const borrarProducto =async (req,res)=>{
    try {

      await Receta.findByIdAndDelete(req.params.id)
      res.status(200).json({
        mensaje:"el producto se elimino correctamente"
      })

        
    } catch (error) {
        console.log(error)
        res.status(404).json({
            mensaje:"error al intentar borrar el producto"
        })
    }
}