const fs = require("fs");
const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.SECRET_KEY;
const dotenv = require("dotenv")
dotenv.config();

const register = (req, res) => {
  const { email, password } = req.body;

  fs.readFile("./db/db.json", "utf-8", (err, data) => {
    if (err) return res.status(500).json({ message: "DB error" });

    const users = JSON.parse(data || "[]");

    if (users.find((u) => u.email === email)) {
      return res.status(400).json({ message: "User already exists" });
    }

    const newUser = { id: Date.now(), email, password };
    users.push(newUser);

    fs.writeFile("./db/db.json", JSON.stringify(users, null, 2), (err) => {
      if (err) return res.status(500).json({ message: "DB write error" });
      res.status(201).json({ message: "User registered" });
    });
  });
};

module.exports = {register}