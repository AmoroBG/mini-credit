// REQUIRE PACKAGES - EXTERNAL
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

// REQUIRE MODULES - INTERNAL

// LOAD CONFIG
dotenv.config({ path: "./servers/config/config.env" });

// INITIALIZE APP
const app = express();

// MIDDLEWARES
// body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTES

// Home Route
app.get("/", function (req, res) {
  res.send("<h1>Mini-Credit</h1>");
});

// SERVER
const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log(`Server Listening on port ${PORT}`);
});
