import { Router } from "express";
import { crearReceta } from "../controllers/producto.controllers";

const router = Router();

router.route("/receta").get().post(crearReceta)


export default router;