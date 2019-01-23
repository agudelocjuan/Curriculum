var express = require("express");
var path = require("path");
var app = express();

app.use("/vendor", express.static("vendor"));
app.use("/css", express.static(__dirname + "/css"));
app.use("/img", express.static(__dirname + "/img"));
app.use("/js", express.static(__dirname + "/js"));

app.get("/", function(req, res) {
  res.sendFile("index.html", {
    root: path.join(__dirname, "./")
  });
});

app.listen(3000, function() {
  console.log("CORRIENDO");
});
