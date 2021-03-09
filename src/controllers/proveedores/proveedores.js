const ctrl = {};
const pool  = require('../../database.js');

//listar todo
ctrl.list = async (req, res) => {
	const proveedores = await pool.query('SELECT po.ID ,empresa, direccion, p.Nombre, telefono,correo, representante FROM proveedores po  INNER JOIN ciudades p ON po.id_ciudad = p.ID ORDER BY po.ID', (err, rows, fields) => {
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
    await pool.query('SELECT po.ID ,empresa, direccion, p.Nombre, telefono,correo, representante FROM proveedores po  INNER JOIN ciudades p ON po.id_ciudad = p.ID ORDER BY po.ID WHERE id = ?', [id], (err, rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
};

//crear 
ctrl.create = async (req, res) => {
    const proveedores= req.body;
	await pool.query('INSERT INTO proveedores set ?', [proveedores], (err, rows, fields) => {
        if(!err) {
            res.json({status: 'proveedor Saved'});
        } else {
            console.log(err);
        }
    });
};

//actualizar 
ctrl.update = async (req, res) => {
	const { id } = req.params;
	const proveedores = req.body;
	await pool.query('UPDATE proveedores set ? where ID = ?', [proveedores, id], (err, rows, fields) => {
        if(!err) {
            res.json({status: 'proveedor update'});
        } else {
            console.log(err);
        }
    });
};

//eliminar
ctrl.delete = async (req, res) => {
	const {id} = req.params;
	await pool.query('DELETE FROM proveedores WHERE ID = ?', [id], (err, rows, fields) => {
        if(!err) {
            res.json({status: 'proveedor delete'});
        } else {
            console.log(err);
        }
    });
	
};

//exportar
module.exports = ctrl;