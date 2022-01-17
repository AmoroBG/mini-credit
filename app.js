// REQUIRE PACKAGES - EXTERNAL
const express = require("express");

// REQUIRE MODULES - INTERNAL

// INITIALIZE APP
const app = express();

// MIDDLEWARES

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
