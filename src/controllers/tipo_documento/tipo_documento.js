const ctrl = {};
const pool  = require('../../database.js');

//listar todo
ctrl.list = async (req, res) => {
	const tipo_documento = await pool.query('SELECT * FROM tipo_documento', (err, rows, fields) => {
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
    await pool.query('SELECT * FROM tipo_documento WHERE id = ?', [id], (err, rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
};

//crear 
ctrl.create = async (req, res) => {
    const documento= req.body;
	await pool.query('INSERT INTO tipo_documento set ?', [documento], (err, rows, fields) => {
        if(!err) {
            res.json({status: 'documento Saved'});
        } else {
            console.log(err);
        }
    });
};

//actualizar 
ctrl.update = async (req, res) => {
	const { id } = req.params;
	const documento = req.body;
	await pool.query('UPDATE tipo_documento set ? where ID = ?', [documento, id], (err, rows, fields) => {
        if(!err) {
            res.json({status: 'documento update'});
        } else {
            console.log(err);
        }
    });
};

//eliminar
ctrl.delete = async (req, res) => {
	const {id} = req.params;
	await pool.query('DELETE FROM tipo_documento WHERE ID = ?', [id], (err, rows, fields) => {
        if(!err) {
            res.json({status: 'documento delete'});
        } else {
            console.log(err);
        }
    });
	
};

//exportar
module.exports = ctrl;