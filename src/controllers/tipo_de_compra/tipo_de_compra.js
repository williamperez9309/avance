const ctrl = {};
const pool  = require('../../database.js');

//listar todo
ctrl.list = async (req, res) => {
	const tipo = await pool.query('SELECT * FROM tipo_de_compra', (err, rows, fields) => {
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
    await pool.query('SELECT * FROM tipo_de_compra WHERE id = ?', [id], (err, rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
};

//crear 
ctrl.create = async (req, res) => {
    const tipo= req.body;
	await pool.query('INSERT INTO tipo_de_compra set ?', [tipo], (err, rows, fields) => {
        if(!err) {
            res.json({status: 'tipo Saved'});
        } else {
            console.log(err);
        }
    });
};

//actualizar 
ctrl.update = async (req, res) => {
	const { id } = req.params;
	const tipo = req.body;
	await pool.query('UPDATE tipo_de_compra set ? where ID = ?', [tipo, id], (err, rows, fields) => {
        if(!err) {
            res.json({status: 'tipo update'});
        } else {
            console.log(err);
        }
    });
};

//eliminar
ctrl.delete = async (req, res) => {
	const {id} = req.params;
	await pool.query('DELETE FROM tipo_de_compra WHERE ID = ?', [id], (err, rows, fields) => {
        if(!err) {
            res.json({status: 'tipo delete'});
        } else {
            console.log(err);
        }
    });
	
};

//exportar
module.exports = ctrl;