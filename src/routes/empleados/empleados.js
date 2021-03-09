const express = require('express');
const router = express.Router();

//requerir controladores
const api = require('../../controllers/empleados/empleados');

//listar paises
router.get('/api/empleados', api.list);

//listar uno
router.get('/api/empleados/:id', api.list_one);

//crear 
router.post('/api/empleados', api.create);

//actualizar
router.put('/api/empleados/:id', api.update);

//eliminar
router.delete('/api/empleados/:id', api.delete);

module.exports = router;
