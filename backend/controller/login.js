const jwt = require("jsonwebtoken");
const fs = require("fs");

function login_the_user(req, res) {
  const { email, password } = req.body;

  fs.readFile("./db/db.json", "utf-8", (err, data) => {
    if (err) {
      return res.json("There is an error somewhere");
    }

    let all_winners_data = JSON.parse(data);

      let curr_winner = all_winners_data.find((u) => u.email == email);
      
      if (!curr_winner) {
       return res.json({message: "You don't exist here 👻"})
    }

    if (curr_winner["password"] != password) {
      return res.json({ err: "Wrong password" });
    }

    const my_token = jwt.sign(
      { email: curr_winner.email },
      "secretkey",
      { expiresIn: "1h" },
    );

    res.json({ my_token });
  });
}

module.exports = { login_the_user };
