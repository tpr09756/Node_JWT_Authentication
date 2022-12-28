const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

app.get("/api", (req, res) => {
  res.json({
    message: "Hey there! Welcome to this API service",
  });
});

app.listen(3000, (req, res) => {
  console.log("server started on port 3000");
});
