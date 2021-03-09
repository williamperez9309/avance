const ctrl = {};
const pool  = require('../../database.js');

//listar todo
ctrl.list = async (req, res) => {
	const productos = await pool.query('SELECT pro.ID, pro.Nombre, pro.descripcion, pro.precio_de_compra, pro.precio_de_venta, c.tipo_producto, b.zona FROM productos pro INNER JOIN categorias c ON pro.id_categoria = c.ID INNER JOIN bodega b ON pro.id_bodega = b.ID ORDER BY pro.ID', (err, rows, fields) => {
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
    await pool.query('SELECT pro.ID, pro.Nombre, pro.descripcion, pro.precio_de_compra, pro.precio_de_venta, c.tipo_producto, b.zona FROM productos pro INNER JOIN categorias c ON pro.id_categoria = c.ID INNER JOIN bodega b ON pro.id_bodega = b.ID ORDER BY pro.ID WHERE id = ?', [id], (err, rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
};

//crear 
ctrl.create = async (req, res) => {
    const producto= req.body;
	await pool.query('INSERT INTO productos set ?', [producto], (err, rows, fields) => {
        if(!err) {
            res.json({status: 'producto Saved'});
        } else {
            console.log(err);
        }
    });
};

//actualizar 
ctrl.update = async (req, res) => {
	const { id } = req.params;
	const producto = req.body;
	await pool.query('UPDATE productos set ? where ID = ?', [producto, id], (err, rows, fields) => {
        if(!err) {
            res.json({status: 'producto update'});
        } else {
            console.log(err);
        }
    });
};

//eliminar
ctrl.delete = async (req, res) => {
	const {id} = req.params;
	await pool.query('DELETE FROM productos WHERE ID = ?', [id], (err, rows, fields) => {
        if(!err) {
            res.json({status: 'producto delete'});
        } else {
            console.log(err);
        }
    });
	
};

//exportar
module.exports = ctrl;