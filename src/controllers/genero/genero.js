const ctrl = {};
const pool  = require('../../database.js');

//listar todo
ctrl.list = async (req, res) => {
	const genero = await pool.query('SELECT * FROM genero', (err, rows, fields) => {
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
    await pool.query('SELECT * FROM genero WHERE id = ?', [id], (err, rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
};

//crear 
ctrl.create = async (req, res) => {
    const genero= req.body;
	await pool.query('INSERT INTO genero set ?', [genero], (err, rows, fields) => {
        if(!err) {
            res.json({status: 'genero Saved'});
        } else {
            console.log(err);
        }
    });
};

//actualizar 
ctrl.update = async (req, res) => {
	const { id } = req.params;
	const genero = req.body;
	await pool.query('UPDATE genero set ? where ID = ?', [genero, id], (err, rows, fields) => {
        if(!err) {
            res.json({status: 'genero update'});
        } else {
            console.log(err);
        }
    });
};

//eliminar
ctrl.delete = async (req, res) => {
	const {id} = req.params;
	await pool.query('DELETE FROM genero WHERE ID = ?', [id], (err, rows, fields) => {
        if(!err) {
            res.json({status: 'genero delete'});
        } else {
            console.log(err);
        }
    });
	
};

//exportar
module.exports = ctrl;