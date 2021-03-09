const express = require('express');
const router = express.Router();

//requerir controladores
const api = require('../../controllers/productos/productos');

//listar paises
router.get('/api/productos', api.list);

//listar uno
router.get('/api/productos/:id', api.list_one);

//crear 
router.post('/api/productos', api.create);

//actualizar
router.put('/api/productos/:id', api.update);

//eliminar
router.delete('/api/productos/:id', api.delete);

module.exports = router;
