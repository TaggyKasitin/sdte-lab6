const express = require("express");
const app = express();

app.get("/hi", (req, res) => {
  res.send("Hello form the other sideeeeeeeeeeeeeeee!");
});

module.exports = app;
