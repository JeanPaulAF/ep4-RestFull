const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');


router.post('/add', productoController.crearProducto);
router.get('/get', productoController.obtenerProducto);
router.put('/put/:id', productoController.actualizarProducto);
router.delete('/delete', productoController.eliminarProducto);

module.exports = router;
