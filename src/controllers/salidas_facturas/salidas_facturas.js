const ctrl = {};
const pool  = require('../../database.js');

//listar todo
ctrl.list = async (req, res) => {
	const salidas = await pool.query('SELECT st.ID, st.fecha, c.ID cliente, em.ID empleado, pro.Nombre producto, pro.precio_de_venta, st.cantidad, st.iva, st.total, tc.tipo_de_compra FROM salidas_facturas st INNER JOIN empleados em ON em.ID = st.id_empleados INNER JOIN productos pro ON pro.ID = st.id_producto INNER JOIN persona p ON p.ID = em.id_persona INNER JOIN clientes c ON c.ID = st.id_cliente INNER JOIN tipo_de_compra tc ON tc.ID = st.id_tipo', (err, rows, fields) => {
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
    await pool.query('SELECT st.ID, st.fecha, c.ID cliente, em.ID empleado, pro.Nombre producto, pro.precio_de_venta, st.cantidad, st.iva, st.total, tc.tipo_de_compra FROM salidas_facturas st INNER JOIN empleados em ON em.ID = st.id_empleados INNER JOIN productos pro ON pro.ID = st.id_producto INNER JOIN persona p ON p.ID = em.id_persona INNER JOIN clientes c ON c.ID = st.id_cliente INNER JOIN tipo_de_compra tc ON tc.ID = st.id_tipo WHERE id = ?', [id], (err, rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
};

//crear 
ctrl.create = async (req, res) => {
    const salida= req.body;
	await pool.query('INSERT INTO salidas_facturas set ?', [salida], (err, rows, fields) => {
        if(!err) {
            res.json({status: 'salida Saved'});
        } else {
            console.log(err);
        }
    });
};

//actualizar 
ctrl.update = async (req, res) => {
	const { id } = req.params;
	const salida = req.body;
	await pool.query('UPDATE salidas_facturas set ? where ID = ?', [salida, id], (err, rows, fields) => {
        if(!err) {
            res.json({status: 'salida update'});
        } else {
            console.log(err);
        }
    });
};

//eliminar
ctrl.delete = async (req, res) => {
	const {id} = req.params;
	await pool.query('DELETE FROM salidas_facturas WHERE ID = ?', [id], (err, rows, fields) => {
        if(!err) {
            res.json({status: 'salida delete'});
        } else {
            console.log(err);
        }
    });
	
};

//exportar
module.exports = ctrl;