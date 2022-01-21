// REQUIRE PACKAGES - EXTERNAL
const Joi = require("@hapi/joi");

// REQUIRE MODULES - INTERNAL
const User = require("../models/userModel");

// Validation
const userRegistrationValidationSchema = Joi.object({
  firstName: Joi.string().trim().min(3).max(16).required(),
  phone: Joi.string()
    .trim()
    .length(10)
    .pattern(/^[0-9]+$/)
    .required(),
});

// Register user - POST - "/register"
exports.registerUser = function (req, res) {
  // Validate data receive from the user
  const { error } = userRegistrationValidationSchema.validate(req.body);

  if (error) {
    res.status(400).send({
      Error: error.details[0].message,
    });
  }

  // Check if all fields (firstname and phone) are empty
  // if (!req.body) {
  //   res.status(400).send({
  //     message: "Fields cannot be empty",
  //   });
  //   return;
  // }
  // // Check if first name or phone is empty
  // if (!req.body.firstName || !req.body.phone) {
  //   res.status(400).send({
  //     message: "fist name or phone number cannot be empty",
  //   });
  //   return;
  // }

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
