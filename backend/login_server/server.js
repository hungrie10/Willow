const express = require("express");
const cors = require("cors");
const fs = require("fs");
const jwt = require("jsonwebtoken");
// const { router } = require("./router/route");

const app = express();

app.use(express.json());
app.use(cors());

const SECRET_KEY = "your_secret_key"; // move to .env later

// ----------------- REGISTER -----------------
app.post("/register", (req, res) => {
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
});

// ----------------- LOGIN -----------------
app.post("/login", (req, res) => {
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
});

// ----------------- JWT MIDDLEWARE -----------------
function authenticateToken(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader)
    return res.status(401).json({ message: "No token provided" });

  const token = authHeader.split(" ")[1];

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.status(403).json({ message: "Invalid token" });
    req.user = user;
    next();
  });
}

// ----------------- GET ALL USERS (Protected) -----------------
app.get("/users", authenticateToken, (req, res) => {
  fs.readFile("./db/db.json", "utf-8", (err, data) => {
    if (err) return res.status(500).json({ message: "DB error" });

    const users = JSON.parse(data || "[]");
    res.json({ users });
  });
});

// ----------------- GET CURRENT USER PROFILE (Protected) -----------------
app.get("/profile", authenticateToken, (req, res) => {
  fs.readFile("./db/db.json", "utf-8", (err, data) => {
    if (err) return res.status(500).json({ message: "DB error" });

    const users = JSON.parse(data || "[]");
    const user = users.find((u) => u.id === req.user.id);

    if (!user) return res.status(404).json({ message: "User not found" });

    res.json({ user });
  });
});


// For Tasks
app.get("/tasks", (req, res) => {
  const { username } = req.query;

  fs.readFile("./db/tasks.json", "utf-8", (err, data) => {
    if (err) {
      return res.status(500).json({
        message: "Error reading tasks database",
      });
    }

    const parsedData = JSON.parse(data);

    const foundUser = parsedData.users.find(
      (user) => user.username === username
    );

    if (!foundUser) {
      return res.status(404).json({
        message: "User tasks not found",
      });
    }

    res.status(200).json({
     foundUser
    });
  });
});




// ----------------- START SERVER -----------------
app.listen(3000, () => {
  console.log("Server running on port 3000");
});