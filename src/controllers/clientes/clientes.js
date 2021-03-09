const ctrl = {};
const pool  = require('../../database.js');

//listar todo
ctrl.list = async (req, res) => {
	const clientes = await pool.query('SELECT c.ID, nombres, apellidos,N_documento, tc.descripcion FROM clientes c INNER JOIN persona p ON c.id_persona = p.ID INNER JOIN tipo_cliente tc ON tc.ID = c.id_tipo_cliente', (err, rows, fields) => {
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
    await pool.query('SELECT * FROM clientes WHERE id = ?', [id], (err, rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
};

//crear 
ctrl.create = async (req, res) => {
    const clientes= req.body;
	await pool.query('INSERT INTO clientes set ?', [clientes], (err, rows, fields) => {
        if(!err) {
            res.json({status: ' Saved'});
        } else {
            console.log(err);
        }
    });
};

//actualizar 
ctrl.update = async (req, res) => {
	const { id } = req.params;
	const clientes = req.body;
	await pool.query('UPDATE clientes set ? where ID = ?', [clientes, id], (err, rows, fields) => {
        if(!err) {
            res.json({status: ' update'});
        } else {
            console.log(err);
        }
    });
};

//eliminar
ctrl.delete = async (req, res) => {
	const {id} = req.params;
	await pool.query('DELETE FROM clientes WHERE ID = ?', [id], (err, rows, fields) => {
        if(!err) {
            res.json({status: ' delete'});
        } else {
            console.log(err);
        }
    });
	
};

//exportar
module.exports = ctrl;