const express = require("express");
const cors = require("cors");
const { router } = require("./router/route");

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use("/users", router);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
