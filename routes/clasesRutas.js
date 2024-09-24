const express = require('express');
const router = express.Router();
const claseController = require ('../controllers/claseController')

//rutas del crud

router.post('/', claseController.agregarClases);
router.get('/', claseController.mostrarClases);
router.get('/:id',claseController.BuscarClase);
router.put('/:id',claseController.modificarClases);
//router.patch('/:id',claseController.editarClases);
router.delete('/:id',claseController.eliminarClases);

module.exports = router;

