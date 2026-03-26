import React, { useEffect, useState } from "react";
import profile from "../../assets/profile_test.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGridHorizontal, faRedo } from "@fortawesome/free-solid-svg-icons";
import { faWifi } from "@fortawesome/free-solid-svg-icons";
import {
  faChartBar,
  faHome,
  faMoon,
} from "@fortawesome/free-regular-svg-icons";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

function Dashboard() {
  const [user_data, set_user_data] = useState();

  const check_for_token = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      location.assign("/register");
      return;
    }

    try {
       const res = await fetch("http://localhost:3000/profile", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        localStorage.removeItem("token");
        location.assign("/register");
        return;
      }

      const data = await res.json();
      console.log(data)
      set_user_data(data.user);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    check_for_token();
  }, []);

  return (
    <section id="willows_dashboard">
      <div>
        <header>
          <ul>
            {/* This holds the login details of the user */}
            <div id="profile">
              <img src={profile} alt="" />
              <span id="username">
                {user_data ? user_data.name : "Loading..."}
              </span>
            </div>

            {/* This let's you access the users history */}
            <button id="redo_btn">
              <FontAwesomeIcon icon={faRedo} />
            </button>

            <div id="nav-btns">
              <button>
                <FontAwesomeIcon icon={faHome} />
              </button>
              <button>
                <FontAwesomeIcon icon={faMoon} />
              </button>
            </div>
          </ul>
        </header>
      </div>

      <section id="inner_dashboard">
        <aside>
          <nav>
            <ul>
              <li>
                <a href="#">👑</a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faGridHorizontal} />
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faWifi} />
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faChartBar} />
                </a>
              </li>
              <li>
                <a href="#">⚡</a>
              </li>
            </ul>
          </nav>
        </aside>

        <main id="main_dashboard">
          <section className="banner">
            <div className="banner-text">
              <h1>Create Your Avatar</h1>
              <p>Turn identity into expression.</p>
              <button>Start Here</button>
            </div>

            <div className="avatars">
              <div className="avatar"></div>
              <div className="avatar"></div>
              <div className="avatar"></div>
              <div className="avatar"></div>
            </div>
          </section>
          <section className="cards">
            <div className="card">Take a quiz</div>
            <div className="card">Go for a walk</div>
            <div className="card">Study for 30 minutes</div>
            <div className="card">Step away from your screen</div>
            <div className="card">Drink Water</div>
            <div className="card">Get enough sleep</div>
          </section>
        </main>
      </section>

      <footer>
        <section id="inner_footer">
          <button>
            <FontAwesomeIcon icon={faPlusCircle} />
          </button>
          <span></span>
        </section>
      </footer>
    </section>
  );
}

export default Dashboard;
