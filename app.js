const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// Handle Requests
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET");
  next();
});

// Coordinates Controller
const Coordinates = require("./routes/coordinates.js");
app.use(bodyParser.json());

// Use
app.use("/", Coordinates);

app.listen(5000);
