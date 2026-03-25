import React from "react";
import profile from "../../assets/profile_test.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGridHorizontal, faRedo } from "@fortawesome/free-solid-svg-icons";
import { faWifi } from "@fortawesome/free-solid-svg-icons";
import { faChartBar, faHome, faMoon } from "@fortawesome/free-regular-svg-icons";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

function Dashboard() {
  return (
    <section id="willows_dashboard">
      <header>
        <ul>
        {/* This holds the login details of the user */}
        <div id="profile">
          <img src={profile} alt="" />
          <span id="username">Richard</span>
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

      <section id="inner_dashboard">
        
        <aside>
          <nav>
            <ul>
              <li><a href="#">👑</a></li>
              <li><a href="#"><FontAwesomeIcon icon={faGridHorizontal} /></a></li>
              <li><a href="#"><FontAwesomeIcon icon={faWifi} /></a></li>
              <li><a href="#"><FontAwesomeIcon icon={faChartBar} /></a></li>
              <li><a href="#">⚡</a></li>
            </ul>
          </nav>
        </aside>

        <main id="main_dashboard">
            <section class="banner">
      <div class="banner-text">
        <h1>Create Your Avatar</h1>
        <p>Turn identity into expression.</p>
        <button>Start Here</button>
      </div>

      <div class="avatars">
        <div class="avatar"></div>
        <div class="avatar"></div>
        <div class="avatar"></div>
        <div class="avatar"></div>
      </div>
    </section>
          <section class="cards">
      <div class="card">Take a quiz</div>
      <div class="card">Go for a walk</div>
      <div class="card">Study for 30 minutes</div>
      <div class="card">Step away from your screen</div>
      <div class="card">Drink Water</div>
      <div class="card">Get enough sleep</div>
    </section>
        </main>


      </section>

      <footer>
        <section id="inner_footer">
          <button><FontAwesomeIcon icon={faPlusCircle} /></button>
          <span></span>
        </section>
      </footer>
    </section>
  );
}

export default Dashboard;
