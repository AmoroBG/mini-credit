// REQUIRE PACKAGES - EXTERNAL
const Joi = require("@hapi/joi");

// user registration validation function
exports.registerValidation = function (data) {
  // Validation
  const schema = Joi.object({
    firstName: Joi.string().trim().min(3).max(16).required(),
    phone: Joi.string()
      .trim()
      .length(10)
      .pattern(/^[0-9]+$/)
      .required(),
  });
  return schema.validate(data);
};
