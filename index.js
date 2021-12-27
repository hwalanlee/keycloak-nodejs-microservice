var express = require("express");
var app = express();

app.get("/", function (req, res) {
    res.send("Server is up!");
});

app.listen(3000);