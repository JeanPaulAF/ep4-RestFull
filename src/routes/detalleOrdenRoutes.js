const express = require('express');
const router = express.Router();
const detalleOrdenController = require('../controllers/detalleOrdenController');

router.post('/add', detalleOrdenController.crearDetalleOrden);
router.get('/get', detalleOrdenController.obtenerDetallesPorIdOrden);
router.put('/put/:id', detalleOrdenController.actualizarDetalleOrden);
router.delete('/delete', detalleOrdenController.eliminarDetalleOrden);

module.exports = router;
