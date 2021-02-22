const express = require("express");
const app = express();

app.get("/hi", (req, res) => {
  res.send("Hello from the other sideeeeeeeeee!");
});

module.exports = app;
