import React, { useState } from "react";
import Header from "../../component/Header";
import cloud from "./../../assets/clouds.png";
import { Routes, Route } from "react-router-dom";
import data from "../../../public/data.json";
import shuffle_arr from "../../../public/shuffle";

function Home() {
  let [dummy_data, set_dummy_data] = useState([...data]);

  const [used, setUsed] = useState([]);

  const [slider, setSlider] = useState(0);
  const [value, setValue] = useState(0);
  const [message, setMessage] = useState("Drag to see growth →");


  

  function changeMessage() {

      let my_arr = [...dummy_data];
      if (my_arr.length == 0) {
          my_arr = shuffle_arr(used);
          setUsed([]);
      }
    
      // This function selects a random message
      const the_trash = used;
      const my_data = my_arr.pop();
      the_trash.push(my_data);
      setMessage(my_data["message"]);
      set_dummy_data(my_arr);
      setUsed(the_trash)
      
  }

  function changeValue(e) {
    setSlider(e.target.value);

    if (slider == 25) {
      setValue(slider * 1000);
    } else if (slider < 65) {
      setValue(slider * 10000);
    } else {
      setValue(slider * 50000);
    }
    changeMessage();
  }

  return (
    <main id="landing_page_home">
      {/* This is the header */}
      <Header />

      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>
              <span>EXPERIENCE PRODUCTIVITY</span>{" "}
              <span>LIKE NEVER BEFORE</span>
            </h1>

            <article>
              <p>
                This is a space designed to help you focus without pressure,
                organize without stress, and move through your day with clarity
                and confidence. Every feature is built to support you, not rush
                you, allowing you to work at your own pace while still making
                meaningful progress.
              </p>
            </article>

            <div className="preview"></div>
            <button>Get Started</button>
          </div>
        </div>
      </section>

      <section id="second_part">
        <section id="inner_second_pattern">
          <div id="first_layer">
            <h1>Make Every Minute</h1>
          </div>

          <div className="flex_box">
            <img src={cloud} alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              excepturi vero dolore, obcaecati neque, dolores accusamus officia
              illum consequatur a labore! Illum fugit tenetur neque eos qui
              voluptatem incidunt explicabo quibusdam pariatur debitis
              architecto, voluptatum nulla perferendis esse inventore labore,
              alias praesentium quidem ratione. Consectetur culpa eum voluptate
              quas nesciunt?
            </p>
          </div>

          <div id="control_btns">
            <button></button>
            <button></button>
          </div>
        </section>
      </section>

      <section id="third_part">
        <div className="container">
          <h1 id="userCount">{value}+</h1>
          <div className="label">{message}</div>
          <br />
          <input
            type="range"
            min="1"
            max="100"
            value={slider}
            id="slider"
            onInput={(e) => changeValue(e)}
          />
        </div>
      </section>
    </main>
  );
}

export default Home;
