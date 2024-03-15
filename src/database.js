
const mysql = require ("promise-mysql");

const conection = mysql.createConnection({
    host: "localhost",
    database: "sakila",
    user: "root", 
    password:"qwer3722"
})
const getConection =async()=> await conection;
module.exports={
    getConection
}