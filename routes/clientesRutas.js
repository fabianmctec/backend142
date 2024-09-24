const express = require('express');
const router = express.Router();
const clienteController = require ('../controllers/clienteController')

//rutas del crud

router.post('/', clienteController.agregarClientes);
router.get('/', clienteController.mostrarClientes);
router.get('/:id',clienteController.BuscarCliente);
router.put('/:id',clienteController.modificarClientes);
//router.patch('/:id',clienteController.editarClientes);
router.delete('/:id',clienteController.eliminarClientes);

module.exports = router;

