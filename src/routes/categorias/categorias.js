const express = require('express');
const router = express.Router();

//requerir controladores
const api = require('../../controllers/categorias/categorias');

//listar categoria
router.get('/api/categorias', api.list);

//listar uno
router.get('/api/categorias/:id', api.list_one);

//crear 
 router.post('/api/categorias', api.create);

//actualizar
router.put('/api/categorias/:id', api.update); 

//eliminar
router.delete('/api/categorias/:id', api.delete);

module.exports = router;
