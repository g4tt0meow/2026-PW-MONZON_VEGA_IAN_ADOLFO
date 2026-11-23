//la puta base de mierda 
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '05a07M23',
    database: 'bodrio_batiz',
    dateStrings: true,
});

module.exports = pool;