const express = require('express');
const router = express.Router();
const ordenController = require('../controllers/ordenController');

router.post('/add', ordenController.crearOrden);
router.get('/get', ordenController.obtenerOrden);
router.put('/put/:id', ordenController.actualizarOrden);
router.delete('/delete', ordenController.eliminarOrden);

module.exports = router;
