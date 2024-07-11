const express = require('express');
const router = express.Router();
const categoriaController = require('../controllers/categoriaController');


router.post('/add', categoriaController.crearCategoria);
router.get('/get', categoriaController.obtenerCategorias);
router.put('/put/:id', categoriaController.actualizarCategoria);
router.delete('/delete', categoriaController.eliminarCategoria);

module.exports = router;