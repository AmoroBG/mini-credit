// REQUIRE PACKAGES - EXTERNAL

// REQUIRE MODULES - INTERNAL
const User = require("../models/userModel");
const Validations = require("../middlewares/validations.js");

// Register user - POST - "/register"
exports.registerUser = function (req, res) {
  // Validate data received from the user
  const { error } = Validations.registerValidation(req.body);
  // If there is an error or validation fail
  if (error) {
    res.status(400).send({
      error: error.details[0].message,
    });
    return;
  }
  // else If no error

  // Check if phone number is already registered or not. If not, create user
  User.find({ phone: req.body.phone }).then(function (foundUser) {
    // Check if phone number is already registered
    if (foundUser.length >= 1) {
      res.status(409).send({
        message: "Phone number is alredy registered",
      });
    } else {
      //  Create user if phone number is not registered
      const user = new User({
        firstName: req.body.firstName,
        phone: req.body.phone,
      });
      // Save user to database
      user
        .save()
        .then(function () {
          res.status(201).json({
            message: "user registered",
          });
        })
        .catch(function (err) {
          res.status(500).json({
            error: err,
          });
        });
    }
  });
};
