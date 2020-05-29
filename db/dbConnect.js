const mysql = require('mysql2');
const util = require("util");

const dbConnect = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "rootroot",
  database: "employees_db"
});

dbConnect.connect();

dbConnect.query = util.promisify(dbConnect.query);

module.exports = dbConnect;
