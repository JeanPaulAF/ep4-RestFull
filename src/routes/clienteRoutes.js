const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');

router.post('/add', clienteController.registrarCliente);
router.get('/get', clienteController.obtenerCliente);
router.put('/put/:id', clienteController.actualizarCliente);
router.delete('/delete', clienteController.eliminarCliente);

module.exports = router;
