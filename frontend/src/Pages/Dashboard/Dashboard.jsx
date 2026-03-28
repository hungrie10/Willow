import React, { useEffect, useState } from "react";
import profile from "../../assets/profile_test.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGridHorizontal,
  faPen,
  faRedo,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { faWifi } from "@fortawesome/free-solid-svg-icons";
import {
  faChartBar,
  faHome,
  faMoon,
} from "@fortawesome/free-regular-svg-icons";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";

function Dashboard() {
  const bod_ref = useRef(null);

  const [user_data, set_user_data] = useState();

  const [tasks, setTasks] = useState([]);
  const [curr_ind, setCurrInd] = useState(0);
  const [currentChunk, setCurrentChunk] = useState([]);
  const [capacity, set_capacity] = useState(3);

  function show_next_tasks() {
    if (curr_ind >= tasks.length) return; // nothing left to show

    // Slice 3 items from tasks starting at curr_ind
    const nextChunk = tasks.slice(curr_ind, curr_ind + capacity);

    // console.log("Sn",nextChunk)
    setCurrentChunk(nextChunk);

    // Update curr_ind for next call
    setCurrInd((prev) => prev + nextChunk.length);
  }

  

  const changeModes = function () {
    bod_ref.current.classList.toggle("drk_mode");
  };

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
      console.log(data);
      set_user_data(data.user);
    } catch (err) {
      console.error(err);
    }
  };

  const get_users_tasks = async () => {
    const username = user_data["username"];
    console.log(username);

    const res = await fetch(`http://localhost:3000/tasks?username=${username}`);

    const data = await res.json();
    setTasks(data["foundUser"]["tasks"]);
    console["log"](data["foundUser"]["tasks"]);
  };

  useEffect(() => {
    check_for_token();
  }, []);

  useEffect(() => {
    if (user_data) {
      get_users_tasks();
    }
  }, [user_data]);

  // show_next_tasks()
  useEffect(() => {
    console.log("Current chunk updated:", currentChunk);

  }, [currentChunk]);

  return (
    <section ref={bod_ref} id="willows_dashboard" className="drk_mode">
      <div>
        <header>
          <ul>
            {/* This holds the login details of the user */}
            <div id="profile">
              <img src={profile} alt="" />
              <span id="username">
                {user_data ? user_data.username : "Loading..."}
              </span>
            </div>

            {/* This let's you access the users history */}
            <button id="redo_btn">
              <FontAwesomeIcon className="icon" icon={faRedo} />
            </button>

            <div id="nav-btns">
              <button>
                <FontAwesomeIcon className="icon" icon={faHome} />
              </button>
              <button id="btn" onClick={changeModes}>
                <FontAwesomeIcon className="icon" icon={faMoon} />
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
                  <FontAwesomeIcon className="icon" icon={faGridHorizontal} />
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon className="icon" icon={faWifi} />
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon className="icon" icon={faChartBar} />
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
            <div className="ctrl_panel" onClick={show_next_tasks}>+</div>
          <section className="cards">

            
            {currentChunk?.map((i) => (
             <div className="card">
              <div className="card-controls">
                <FontAwesomeIcon icon={faPen} className="icon edit" />
                <FontAwesomeIcon icon={faTrash} className="icon delete" />
              </div>

              <div className="card-content">
                <h3 className="card-title">{i?.title}</h3>
              </div>
            </div>
            ))}

            {/* <div className="card">{tasks[curr_disp]?.title}</div>
            <div className="card">{tasks[curr_disp + 1]?.title}</div>
            <div className="card">{tasks[curr_disp + 2]?.title}</div> */}

            {/*  */}
          </section>
        </main>
      </section>

      <footer>
        <section id="inner_footer">
          <button>
            <FontAwesomeIcon icon={faPlusCircle} />
          </button>
          {/* <span></span> */}
        </section>
      </footer>
    </section>
  );
}

export default Dashboard;
