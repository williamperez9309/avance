const ctrl = {};
const pool  = require('../../database.js');

//listar todo
ctrl.list = async (req, res) => {
	const paises = await pool.query('SELECT p.ID, nombres,N_documento,direccion,barrio,fecha_nacimiento,telefono,correo,td.descripcion documento,g.descripcion genero FROM persona p INNER JOIN genero g ON g.ID = p.id_genero INNER JOIN tipo_documento td ON td.ID = p.id_documento', (err, rows, fields) => {
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
    await pool.query('SELECT p.ID, nombres,N_documento,direccion,barrio,fecha_nacimiento,telefono,correo,td.descripcion documento,g.descripcion genero FROM persona p INNER JOIN genero g ON g.ID = p.id_genero INNER JOIN tipo_documento td ON td.ID = p.id_documento WHERE p.id = ?', [id], (err, rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
};

//crear 
ctrl.create = async (req, res) => {
    const persona = req.body;
	await pool.query('INSERT INTO persona set ?', [persona], (err, rows, fields) => {
        if(!err) {
            res.json({status: 'persona agregada'});
        } else {
            console.log(err);
        }
    });
};

//actualizar 
ctrl.update = async (req, res) => {
	const { id } = req.params;
	const persona = req.body;
	await pool.query('update persona set ? where ID = ?', [persona, id], (err, rows, fields) => {
        if(!err) {
            res.json({status: 'persona actualizada'});
        } else {
            console.log(err);
        }
    });
};

//eliminar
ctrl.delete = async (req, res) => {
	const {id} = req.params;
	await pool.query('DELETE FROM persona WHERE ID = ?', [id], (err, rows, fields) => {
        if(!err) {
            res.json({status: 'persona delete'});
        } else {
            console.log(err);
        }
    });
	
};

//exportar
module.exports = ctrl;