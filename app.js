// REQUIRE PACKAGES - EXTERNAL
const express = require("express");
const dotenv = require("dotenv");

// REQUIRE MODULES - INTERNAL
const dbconnect = require("./server/database/dbconnection");
const userRoutes = require("./routes/userRoutes");

// LOAD CONFIG
dotenv.config({ path: "./server/config/config.env" });

// INITIALIZE APP
const app = express();

// DB CONNECTION
dbconnect;

// MIDDLEWARES
// body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTES

// Home Route
app.get("/", function (req, res) {
  res.send("<h1>Mini-Credit</h1>");
});

// Users Route
app.use("/user", userRoutes);



// SERVER
const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log(`Server Listening on port ${PORT}`);
});
