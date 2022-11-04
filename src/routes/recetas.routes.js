import { Router } from "express";
import { borrarProducto, crearReceta, editarReceta, listarRecetas, obtenerProducto } from "../controllers/producto.controllers";

const router = Router();

router.route("/receta").get(listarRecetas).post(crearReceta)
router.route("/receta/:id").get(obtenerProducto).put(editarReceta).delete(borrarProducto)


export default router;