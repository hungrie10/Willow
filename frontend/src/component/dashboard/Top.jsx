import React from 'react'

function Top() {
  return (
    <div>
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
    </div>
  )
}

export default Top
