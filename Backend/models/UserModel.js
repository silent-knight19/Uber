const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema({
  fullname: {
    firstName: {
      type: String,
      required: true,
      minlength: [3, "First name must be at least 3 characters long"],
    },
    lastName: {
      type: String,
      required: true,
      minlength: [2, "Last name must be at least 2 characters long"],
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: [6, "Email must be at least 6 characters long"],
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  socketId: {
    type: String,
    default: null,
  },
});

UserSchema.methods.generateToken = function () {
  const token = jwt.sign({ id: this._id }, process.env.JWT_SECRET);
  return token;
};
UserSchema.methods.comparePassword = function (password) {
  return bcrypt.compare(password, this.password);
};
UserSchema.statics.hashPassword = function (password) {
  return bcrypt.hash(password, 10);
};
const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;
