// REQUIRE PACKAGES - EXTERNAL
const express = require("express");
const router = express.Router();

// REQUIRE MODULES - INTERNAL
const user = require("../controllers/userController");

// Register user - POST - "/register"
router.post("/register", user.registerUser);

// Retrieve all users - GET - "/"

module.exports = router;
