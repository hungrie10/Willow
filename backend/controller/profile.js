const fs = require("fs");
const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.SECRET_KEY;
const dotenv = require("dotenv")
dotenv.config();

const profile = (req, res) => {
  fs.readFile("./db/db.json", "utf-8", (err, data) => {
    if (err) return res.status(500).json({ message: "DB error" });

    const users = JSON.parse(data || "[]");
    const user = users.find((u) => u.id === req.user.id);

    if (!user) return res.status(404).json({ message: "User not found" });

    res.json({ user });
  });
}

module.exports = { profile; }