const express = require("express");
const cors = require("cors");
const fs = require("fs");
// const { router } = require("./router/route");

const app = express();

app.use(express.json());
app.use(cors());




app.listen(3000, () => {
  console.log("Server running on port 3000");
});