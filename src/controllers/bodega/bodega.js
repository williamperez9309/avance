const ctrl = {};
const pool  = require('../../database.js');

//listar todo
ctrl.list = async (req, res) => {
	const bodega = await pool.query('SELECT * FROM bodega', (err, rows, fields) => {
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
    await pool.query('SELECT * FROM bodega WHERE id = ?', [id], (err, rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
};

//crear 
ctrl.create = async (req, res) => {
    const bodega= req.body;
	await pool.query('INSERT INTO bodega set ?', [bodega], (err, rows, fields) => {
        if(!err) {
            res.json({status: 'bodega Saved'});
        } else {
            console.log(err);
        }
    });
};

//actualizar 
ctrl.update = async (req, res) => {
	const { id } = req.params;
	const bodega = req.body;
	await pool.query('UPDATE bodega set ? where ID = ?', [bodega, id], (err, rows, fields) => {
        if(!err) {
            res.json({status: 'bodega update'});
        } else {
            console.log(err);
        }
    });
};

//eliminar
ctrl.delete = async (req, res) => {
	const {id} = req.params;
	await pool.query('DELETE FROM bodega WHERE ID = ?', [id], (err, rows, fields) => {
        if(!err) {
            res.json({status: 'bodega delete'});
        } else {
            console.log(err);
        }
    });
	
};

//exportar
module.exports = ctrl;