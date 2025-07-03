const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const userController = require("../controllers/UserController");

router.post(

  "/register",

  body("email").isEmail().withMessage("Invalid email"),

  body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters long"),

  body("fullname").isLength({ min: 3 }).withMessage("Full name must be at least 3 characters long")
);

module.exports = router;
