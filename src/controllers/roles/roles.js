const ctrl = {};
const pool  = require('../../database.js');

//listar todo
ctrl.list = async (req, res) => {
	const roles = await pool.query('SELECT * FROM roles', (err, rows, fields) => {
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
    await pool.query('SELECT * FROM roles WHERE id = ?', [id], (err, rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
};

//crear 
ctrl.create = async (req, res) => {
    const roles= req.body;
	await pool.query('INSERT INTO roles set ?', [roles], (err, rows, fields) => {
        if(!err) {
            res.json({status: 'roles Saved'});
        } else {
            console.log(err);
        }
    });
};

//actualizar 
ctrl.update = async (req, res) => {
	const { id } = req.params;
	const roles = req.body;
	await pool.query('UPDATE roles set ? where ID = ?', [roles, id], (err, rows, fields) => {
        if(!err) {
            res.json({status: 'roles update'});
        } else {
            console.log(err);
        }
    });
};

//eliminar
ctrl.delete = async (req, res) => {
	const {id} = req.params;
	await pool.query('DELETE FROM roles WHERE ID = ?', [id], (err, rows, fields) => {
        if(!err) {
            res.json({status: 'roles delete'});
        } else {
            console.log(err);
        }
    });
	
};

//exportar
module.exports = ctrl;