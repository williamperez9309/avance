const ctrl = {};
const pool  = require('../../database.js');

//listar todo
ctrl.list = async (req, res) => {
	const ciudades = await pool.query('SELECT * FROM ciudades', (err, rows, fields) => {
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
    await pool.query('SELECT * FROM ciudades WHERE id = ?', [id], (err, rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
};

//crear 
ctrl.create = async (req, res) => {
    const pais= req.body;
	await pool.query('INSERT INTO ciudades set ?', [pais], (err, rows, fields) => {
        if(!err) {
            res.json({status: 'pais Saved'});
        } else {
            console.log(err);
        }
    });
};

//actualizar 
ctrl.update = async (req, res) => {
	const { id } = req.params;
	const pais = req.body;
	await pool.query('UPDATE ciudades set ? where ID = ?', [pais, id], (err, rows, fields) => {
        if(!err) {
            res.json({status: 'pais update'});
        } else {
            console.log(err);
        }
    });
};

//eliminar
ctrl.delete = async (req, res) => {
	const {id} = req.params;
	await pool.query('DELETE FROM ciudades WHERE ID = ?', [id], (err, rows, fields) => {
        if(!err) {
            res.json({status: 'pais delete'});
        } else {
            console.log(err);
        }
    });
	
};

//exportar
module.exports = ctrl;