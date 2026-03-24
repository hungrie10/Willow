import React from "react";
import profile from "../../assets/profile_test.jpg"

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
       <button>⌛</button>

        <div id="nav-btns">
          <button>🏠</button>
          <button>🌙</button>
          </div>
          </ul>
      </header>

      <section id="inner_dashboard">
        
        <aside>
          <nav>
            <ul>
              <li><a href="#">🚀</a></li>
              <li><a href="#">🚀</a></li>
              <li><a href="#">🚀</a></li>
              <li><a href="#">🚀</a></li>
              <li><a href="#">🚀</a></li>
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
        <section id="inner_footer"></section>
      </footer>
    </section>
  );
}

export default Dashboard;
