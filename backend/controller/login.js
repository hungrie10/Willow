const fs = require("fs");
const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.SECRET_KEY;
const dotenv = require("dotenv")
dotenv.config();


const login = (req, res) => {
  const { email, password } = req.body;

  fs.readFile("./db/db.json", "utf-8", (err, data) => {
    if (err) return res.status(500).json({ message: "DB error" });

    const users = JSON.parse(data || "[]");
    const user = users.find(
      (u) => u.email === email && u.password === password,
    );

    if (!user) return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, {
      expiresIn: "1h",
    });

    res.json({ token });
  });
};

module.exports = {login}