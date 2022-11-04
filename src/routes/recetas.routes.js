import { Router } from "express";
import {
  borrarProducto,
  crearReceta,
  editarReceta,
  listarRecetas,
  obtenerProducto,
} from "../controllers/producto.controllers";
import { check } from "express-validator";
const router = Router();

router
  .route("/receta")
  .get(listarRecetas)
  .post(
    [
      check("nombreReceta")
        .notEmpty()
        .withMessage("el nombre de la receta es obligatorio")
        .isLength({ min: 3, max: 300 })
        .withMessage(
          "la cantidad minima de caracteres debe estar entre 3 y 300"
        ),
      check("imagen")
        .notEmpty()
        .withMessage("La url de la imagen es obligatoria")
        .matches(/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/)
        .withMessage("debe ingresar una url valida"),
      check("ingredientes")
        .notEmpty()
        .withMessage("los ingredientes son obligatorios")
        .isLength({ min: 10, max: 600 })
        .withMessage("La cantidad de caracteres debe estar entre 10 y 600"),
      check("categoria")
        .notEmpty()
        .withMessage("la categoria es obligatoria")
        .isIn("Ensaladas", "Pollo", "Pastas", "Guisos", "Postres")
        .withMessage("debe ingresar una categoria valida"),
    ],
    crearReceta
  );
router
  .route("/receta/:id")
  .get(obtenerProducto)
  .put(
    [
      check("nombreReceta")
        .notEmpty()
        .withMessage("el nombre de la receta es obligatorio")
        .isLength({ min: 3, max: 300 })
        .withMessage(
          "la cantidad minima de caracteres debe estar entre 10 y 300"
        ),
      check("imagen")
        .notEmpty()
        .withMessage("La url de la imagen es obligatoria")
        .matches(/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/)
        .withMessage("debe ingresar una url valida"),
      check("ingredientes")
        .notEmpty()
        .withMessage("los ingredientes son obligatorios")
        .isLength({ min: 10, max: 600 })
        .withMessage("La cantidad de caracteres debe estar entre 10 y 600"),
      check("categoria")
        .notEmpty()
        .withMessage("la categoria es obligatoria")
        .isIn("Ensaladas", "Pollo", "Pastas", "Guisos", "Postres")
        .withMessage("debe ingresar una categoria valida"),
    ],
    editarReceta
  )
  .delete(borrarProducto);

export default router;
