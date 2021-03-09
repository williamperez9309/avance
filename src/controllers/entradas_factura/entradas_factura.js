const ctrl = {};
const pool  = require('../../database.js');

//listar todo
ctrl.list = async (req, res) => {
	const entrada = await pool.query('SELECT ef.ID, ef.fecha, po.ID proveedor, em.ID empleado, pro.Nombre producto, pro.precio_de_compra, ef.cantidad, ef.iva, ef.total, tc.tipo_de_compra FROM entradas_factura ef INNER JOIN empleados em ON em.ID = ef.id_empleados INNER JOIN productos pro ON pro.ID = ef.id_producto INNER JOIN persona p ON p.ID = em.id_persona INNER JOIN proveedores po ON po.ID = ef.id_proveedor INNER JOIN tipo_de_compra tc ON tc.ID = ef.id_tipo', (err, rows, fields) => {
        if(!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
};

//listar uno
ctrl.list_one = async (req, res) => {
	const { id } = req.params; 
    await pool.query('SELECT ef.ID, ef.fecha, po.ID proveedor, em.ID empleado, pro.Nombre producto, pro.precio_de_compra, ef.cantidad, ef.iva, ef.total, tc.tipo_de_compra FROM entradas_factura ef INNER JOIN empleados em ON em.ID = ef.id_empleados INNER JOIN productos pro ON pro.ID = ef.id_producto INNER JOIN persona p ON p.ID = em.id_persona INNER JOIN proveedores po ON po.ID = ef.id_proveedor INNER JOIN tipo_de_compra tc ON tc.ID = ef.id_tipo WHERE id = ?', [id], (err, rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
};

//crear 
ctrl.create = async (req, res) => {
    const entrada= req.body;
	await pool.query('INSERT INTO entrada_facturas set ?', [entrada], (err, rows, fields) => {
        if(!err) {
            res.json({status: 'entrada Saved'});
        } else {
            console.log(err);
        }
    });
};

//actualizar 
ctrl.update = async (req, res) => {
	const { id } = req.params;
	const entrada = req.body;
	await pool.query('UPDATE entradas_facturas set ? where ID = ?', [entrada, id], (err, rows, fields) => {
        if(!err) {
            res.json({status: 'entrada update'});
        } else {
            console.log(err);
        }
    });
};

//eliminar
ctrl.delete = async (req, res) => {
	const {id} = req.params;
	await pool.query('DELETE FROM entradas_facturas WHERE ID = ?', [id], (err, rows, fields) => {
        if(!err) {
            res.json({status: 'entrada delete'});
        } else {
            console.log(err);
        }
    });
	
};

//exportar
module.exports = ctrl;