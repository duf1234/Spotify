const mysql = require('mysql');

module.exports = () => {
  return mysql.createConnection({
    host: '206.189.188.126',
    user: 'root',
    password: 'brayan',
    database: 'my_database',
    port: '33308'
  });
}
