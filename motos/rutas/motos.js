const express = require('express');
const router = express.Router();

const controller = require('../controladores/motos');

router.get("/motos/:id", controller.recuperarUno);
router.get("/motos", controller.recuperarTodos);
router.post("/motos", controller.addNuevo);
router.put("/motos", controller.modificar);
router.delete("/motos/:id", controller.eliminar);

module.exports = router;
