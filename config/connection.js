const mysql = require("mysql2");

var connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "root123",
  database: "express_practies",
});
connection.connect((err) => {
  if (!err) {
    console.log("MySQL Connected");
  } else {
    console.log(err);
  }
});
module.exports = connection;
