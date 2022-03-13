const mysql = require("mysql");

function connection() {
  this.pool = null;

  const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "iDoit130322",
    database: "idoit",
  });
  this.init = function () {
    this.pool = mysql.createPool(con);
  };
  this.acquire = function (callback) {
    this.init();
    this.pool.getConnection(function (err, connection) {
      callback(err, connection);
    });
  };
}
module.exports = new connection(console.log("connected"));
