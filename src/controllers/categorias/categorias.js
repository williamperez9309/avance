const ctrl = {};
const pool  = require('../../database.js');

//listar todo
ctrl.list = async (req, res) => {
	const categorias = await pool.query('SELECT * FROM categorias', (err, rows, fields) => {
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
    await pool.query('SELECT * FROM categorias WHERE id = ?', [id], (err, rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
};

//crear 
ctrl.create = async (req, res) => {
    const categorias= req.body;
	await pool.query('INSERT INTO categorias set ?', [categorias], (err, rows, fields) => {
        if(!err) {
            res.json({status: 'categorias Saved'});
        } else {
            console.log(err);
        }
    });
};

//actualizar 
ctrl.update = async (req, res) => {
	const { id } = req.params;
	const categorias = req.body;
	await pool.query('UPDATE categorias set ? where ID = ?', [categorias, id], (err, rows, fields) => {
        if(!err) {
            res.json({status: 'categorias update'});
        } else {
            console.log(err);
        }
    });
};

//eliminar
ctrl.delete = async (req, res) => {
	const {id} = req.params;
	await pool.query('DELETE FROM categorias WHERE ID = ?', [id], (err, rows, fields) => {
        if(!err) {
            res.json({status: 'categorias delete'});
        } else {
            console.log(err);
        }
    });
	
};

//exportar
module.exports = ctrl;