import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    const myDetails = { email, password };

    const res = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(myDetails),
    });

    const data = await res.json();

    if (data.token) {
      setLoader(true);

      setTimeout(() => {
        localStorage.setItem("token", data.token);
        location.assign("/dashboard");
      }, 2000);
    } else {
      localStorage.removeItem("token");
      alert(data.message);
    }
  }

  return (
    <section id="login_page">
      {!loader && (
        <form onSubmit={handleSubmit}>
          <div>
            <h2>Login</h2>
            <hr />
          </div>

          <main>
            <span>
              <label>Email Address</label>
              <br />
              <input
                value={email}
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </span>
            <br />

            <span>
              <label>Password</label>
              <br />
              <input
                value={password}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </span>
          </main>

          <footer>
            <hr />
            <div>
              <input type="submit" value="Login" />
            </div>
          </footer>
        </form>
      )}

      {loader && (
        <section id="login_loader">
          <div id="load_object">Logging in...</div>
        </section>
      )}
    </section>
  );
}

export default Login;