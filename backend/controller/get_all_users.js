const fs = require("fs");
const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.SECRET_KEY;
const dotenv = require("dotenv")
dotenv.config();

const all_users = (req, res) => {
  fs.readFile("./db/db.json", "utf-8", (err, data) => {
    if (err) return res.status(500).json({ message: "DB error" });

    const users = JSON.parse(data || "[]");
    res.json({ users });
  });
}

module.exports = { all_users };