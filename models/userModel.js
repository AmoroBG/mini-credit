// REQUIRE PACKAGES - EXTERNAL
const mongoose = require("mongoose");

// REQUIRE MODULES - INTERNAL

// userSchema
const userSchema = {
  firstName: {
    type: String,
    require: [true, "Please enter your first name"],
  },
  phone: {
    type: String,
    require: [true, "Please enter your phone number"],
    unique: true,
  },
  isPhoneVerified: {
    type: Boolean,
    default: false,
  },
  lastName: String,
  otherNames: String,
  gender: String,
  DoB: Date,
  address: String,

  email: {
    type: String,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    minlength: [8, "Please password can not be less 8 characters"],
  },
  role: {
    type: String,
    default: "1",
  },
  date: {
    type: Date,
    default: Date.now,
  },
  // Account Number - Auto generate 16 digit AccountNumber (4-digit+DoB+registration year)
  accountNumber: String,
};

// userModel
const User = mongoose.model("User", userSchema);
module.exports = User;
