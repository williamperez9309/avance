const ctrl = {};
const pool  = require('../../database.js');

//listar todo
ctrl.list = async (req, res) => {
	const empleados = await pool.query('SELECT em.ID, nombres, apellidos,rol,usuario,contra FROM empleados em INNER JOIN persona pe ON em.id_persona = pe.ID INNER JOIN roles ro ON em.id_rol = ro.ID', (err, rows, fields) => {
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
    await pool.query('SELECT * FROM empleados WHERE id = ?', [id], (err, rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
};

//crear 
ctrl.create = async (req, res) => {
    const empleados= req.body;
	await pool.query('INSERT INTO empleados set ?', [empleados], (err, rows, fields) => {
        if(!err) {
            res.json({status: 'empleados Saved'});
        } else {
            console.log(err);
        }
    });
};

//actualizar 
ctrl.update = async (req, res) => {
	const { id } = req.params;
	const empleados = req.body;
	await pool.query('UPDATE empleados set ? where ID = ?', [empleados, id], (err, rows, fields) => {
        if(!err) {
            res.json({status: 'empleados update'});
        } else {
            console.log(err);
        }
    });
};

//eliminar
ctrl.delete = async (req, res) => {
	const {id} = req.params;
	await pool.query('DELETE FROM empleados WHERE ID = ?', [id], (err, rows, fields) => {
        if(!err) {
            res.json({status: 'empleados delete'});
        } else {
            console.log(err);
        }
    });
	
};

//exportar
module.exports = ctrl;