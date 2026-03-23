const express = require('express');
const router = express.Router();

const { get_all_users } = require('../controller/get_user');
const { login_the_user } = require('../controller/login');

// Define your routes here
router.get("/", get_all_users);
router.post("/login", login_the_user)

module.exports = {router};