const { Router } = require("express");
const router = Router();
//MIDDLEWARE
const multiPartMiddleWare = require("../middleware/multiArchivo.middlware");
//CONTROLADOR
const ctrlArchivo = require("../controllers/archivos.controller");

router.get("/uploads", ctrlArchivo.getArchivos);
router.post("/uploads", multiPartMiddleWare, ctrlArchivo.subirArchivo);
module.exports = router;
