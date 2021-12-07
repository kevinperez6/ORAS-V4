//Aqui se define la base de datos que utilizaremos
const mysql2 = require('mysql2');

const db = mysql2.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "12345",
    database: "orasv1",
});



module.exports = db;