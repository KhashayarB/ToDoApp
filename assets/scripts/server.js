var app = require("./app");
var http = require("http").Server(app);
var port = "8080";

http.listen(port, function () {
  console.log("Server listening on port " + port);
});
