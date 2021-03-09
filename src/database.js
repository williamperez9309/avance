const mysql = require('mysql');

const pool = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'tienda1',
  multipleStatements: true
});

pool.connect(function (err) {
  if (err) {
    console.error(err);
    return;
  } else {
    console.log('db is connected');
  }
});

module.exports = pool;