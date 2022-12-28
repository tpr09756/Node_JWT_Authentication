const { json } = require("express");
const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

app.get("/api", (req, res) => {
  res.json({
    message: "Hey there! Welcome to this API service",
  });
});

app.post("/api/posts", verifyToken, (req, res) => {
  jwt.verify(req.token, "secretkey", (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      res.json({
        message: "post created...",
        authData,
      });
    }
  });
});

app.post("/api/login", (req, res) => {
  user = {
    id: 1,
    username: "tiago",
    email: "tiago@gmail.com",
  };

  jwt.sign({ user: user }, "secretkey", (err, token) => {
    res.json({
      token,
    });
  });
});
function verifyToken(req, res, next) {
  const bearerHeader = req.headers["authorization"];
  if (bearerHeader !== undefined) {
    bearerToken = bearerHeader.split(" ")[1];
    req.token = bearerHeader;
    next();
  } else {
    res.sendStatus(403);
  }
}

app.listen(3000, (req, res) => {
  console.log("server started on port 3000");
});
