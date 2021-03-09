const express = require('express');
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(express.json());

// Routes
app.use(require('./routes/clientes/clientes'));
app.use(require('./routes/empleados/empleados'));
app.use(require('./routes/entradas_factura/entradas_factura'));
app.use(require('./routes/genero/genero'));
app.use(require('./routes/persona/persona'));
app.use(require('./routes/productos/productos'));
app.use(require('./routes/proveedores/proveedores'));
app.use(require('./routes/roles/roles'));
app.use(require('./routes/salidas_facturas/salidas_facturas'));
app.use(require('./routes/tipo_cliente/tipo_cliente'));
app.use(require('./routes/tipo_de_compra/tipo_de_compra'));
app.use(require('./routes/tipo_documento/tipo_documento'));


// Starting the server
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});