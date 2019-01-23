const express = require("express");
const path = require("path");
const app = express();
var port = process.env.PORT || 3000;

app.use("/vendor", express.static("vendor"));
app.use("/css", express.static(__dirname + "/css"));
app.use("/img", express.static(__dirname + "/img"));
app.use("/js", express.static(__dirname + "/js"));

app.get("/", function(req, res) {
  res.sendFile("index.html", {
    root: path.join(__dirname, "./")
  });
});

// app.set("port", process.env.PORT || 3000);
app.listen(port, function() {
  console.log("Listening on port");
});
