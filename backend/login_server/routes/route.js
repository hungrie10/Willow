const express = require("express");
const router = express.Router();
const {register} = require("../controller/register")
const { login } = require("../controller/login");
const {profile} = require("../re")

router.post("/register",  register);
router.post("/login" , login);
router.get("/users");
router.get("/profile");

module.exports = router;