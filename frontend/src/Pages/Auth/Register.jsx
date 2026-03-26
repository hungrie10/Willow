import React from "react";
import { useState, useEffect } from "react";

function Register() {
  const [email, setEmail] = useState("");
  const [create_a_password, set_create_a_password] = useState(".");
  const [confirm_a_password, set_confirm_a_password] = useState("");
  const [match, setMatch] = useState(false);

  let [loader, set_loader] = useState(false);

  useEffect(() => {
    if (create_a_password === "" && confirm_a_password === "") {
      setMatch(true);
    } else {
      setMatch(create_a_password === confirm_a_password);
    }
  }, [create_a_password, confirm_a_password]);

  async function handleSubmit(e) {
    e.preventDefault();
    const my_details = {
      email,
      password: confirm_a_password,
    };

    if (match) {
      const res = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(my_details),
      });

      const my_response = await res.json();

      if (my_response["my_token"]) {
        console.log(my_response["token"]);
        set_loader(true);

        setTimeout(() => {
          localStorage.setItem("token", my_response["my_token"]);
          location.assign("/dashboard");
        }, 4500);


      } else {
        localStorage.removeItem("my_token");
        console.log(my_response["message"]);
      }
    } else {
      alert("Passwords do not match. Please try again.");
    }
  }

  function create_my_password(e) {
    set_create_a_password(e.target.value);
  }

  function confirm_matching_passwords(e) {
    set_confirm_a_password(e.target.value);
  }

  return (
    <section id="login_page">
      {!loader && (
        <form action="#" onSubmit={(e) => handleSubmit(e)}>
          <div>
            <h2>Sign Up</h2>
            <hr />
          </div>

          <main>
            <span>
              <label htmlFor="">Email Address</label>
              <br />
              <input
                value={email}
                type="text"
                name=""
                id=""
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </span>
            <br />
            <span>
              <label htmlFor="">Create Password</label>
              <br />
              <input
                type="password"
                name=""
                id=""
                onChange={(e) => {
                  create_my_password(e);
                }}
              />
            </span>
            <br />
            <span>
              <label htmlFor="">Confirm Password</label>
              <br />
              <input
                type="password"
                name=""
                id=""
                onChange={(e) => {
                  confirm_matching_passwords(e);
                }}
              />
              <br />

              {match != true ? (
                <p id="no_match" className="password-message">
                  Passwords Do Not Match 😭
                </p>
              ) : (
                <p id="match" className="password-message">
                  Yay! They match 🌟
                </p>
              )}
            </span>
          </main>

          <footer>
            <hr />
            <div>
              <input type="submit" value="Submit" />
            </div>
          </footer>
        </form>
      )}

      {loader && (
        <section id="login_loader">
          <div id="load_object">my loader</div>
        </section>
      )}
    </section>
  );
}

export default Register;
