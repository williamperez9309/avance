const express = require('express');
const router = express.Router();

//requerir controladores
const api = require('../../controllers/ciudades/ciudades');

//listar paises
router.get('/api/ciudades', api.list);

//listar ciudades
router.get('/api/ciudades/:id', api.list_one);

//crear 
router.post('/api/ciudades', api.create);

//actualizar
router.put('/api/ciudades:id', api.update);

//eliminar
router.delete('/api/ciudades/:id', api.delete);

module.exports = router;
