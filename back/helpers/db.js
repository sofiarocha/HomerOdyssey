const mysql = require('mysql');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'sofia',
  password : 'password',
  database : 'my_db'
});

connection.connect();

module.exports  =  connection;