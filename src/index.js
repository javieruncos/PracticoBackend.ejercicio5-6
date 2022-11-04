import express from "express";
import cors from "cors"
import morgan from "morgan";
import path from "path";
import "./database"
import recetaRouter from "./routes/recetas.routes"


const app = express();
app.set("port",process.env.PORT|| 4003)
app.listen(app.get("port"),()=>{
    console.log("estoy en el puerto " + app.get("port"))
})

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extends:true}));
app.use(express.static(path.join(__dirname,"../public")))
app.use(morgan("dev"))

app.use("/apiReceta", recetaRouter)