import mongoose ,{Schema} from "mongoose";


const recetaSchema = new Schema({
    nombreReceta:{
        type:String,
        required:true,
        unique:true,
        minLength:2,
        maxLength:200
    },
    imagen:{
        type:String,
        required:true,

    },
    ingredientes:{
        type:String,
        required:true,
        minLength:10,
        maxLength:600
    },
    categoria:{
        type:String,
        required:true
    }   
})


const Receta = mongoose.model("receta",recetaSchema)


export default Receta;