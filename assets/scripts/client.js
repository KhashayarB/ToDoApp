const mysql = require("mysql");

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "iDoit130322",
  database: "idoit",
  port: 3306,
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO task (idTask) VALUES (2)";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("2 created");
  });
});
