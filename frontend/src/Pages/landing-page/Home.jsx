import React, { useState } from "react";
import Header from "../../component/Header";
import cloud from "./../../assets/clouds.png";
import { Routes, Route, Link } from "react-router-dom";
import data from "../../../public/data.json";
import shuffle_arr from "../../../public/shuffle";

function Home() {
  let [dummy_data, set_dummy_data] = useState([...data]);

  let motto = [
    {
      id: 1,
      img: "https://i.pinimg.com/736x/21/86/4a/21864a20145e17f3a4d47e3f6ae8f298.jpg",
      title: "POSE",
      description:
        "Transform your time into progress with a system that helps you prioritize what matters...",
    },
    {
      id: 2,
      img: "https://i.pinimg.com/736x/21/86/4a/21864a20145e17f3a4d47e3f6ae8f298.jpg",
      title: "FLOW",
      description:
        "Find your rhythm and let productivity feel natural instead of forced.",
    },
    {
      id: 3,
      img: "https://i.pinimg.com/736x/21/86/4a/21864a20145e17f3a4d47e3f6ae8f298.jpg",
      title: "FOCUS",
      description:
        "Lock in on what matters and cut through the noise like a laser.",
    },
    {
      id: 4,
      img: "https://i.pinimg.com/736x/21/86/4a/21864a20145e17f3a4d47e3f6ae8f298.jpg",
      title: "MOMENTUM",
      description: "Build small wins into unstoppable forward motion.",
    },
    {
      id: 5,
      img: "https://i.pinimg.com/736x/21/86/4a/21864a20145e17f3a4d47e3f6ae8f298.jpg",
      title: "CLARITY",
      description: "Clear the mental fog and make decisions with confidence.",
    },
    {
      id: 6,
      img: "https://i.pinimg.com/736x/21/86/4a/21864a20145e17f3a4d47e3f6ae8f298.jpg",
      title: "DRIVE",
      description: "Stay energized and push through even when motivation dips.",
    },
    {
      id: 7,
      img: "https://i.pinimg.com/736x/21/86/4a/21864a20145e17f3a4d47e3f6ae8f298.jpg",
      title: "BALANCE",
      description: "Juggle work, life, and growth without dropping the ball.",
    },
    {
      id: 8,
      img: "https://i.pinimg.com/736x/21/86/4a/21864a20145e17f3a4d47e3f6ae8f298.jpg",
      title: "LAUNCH",
      description:
        "Turn ideas into action and get moving without overthinking.",
    },
    {
      id: 9,
      img: "https://i.pinimg.com/736x/21/86/4a/21864a20145e17f3a4d47e3f6ae8f298.jpg",
      title: "TIME",
      description: "Master your hours instead of letting them slip away.",
    },
    {
      id: 10,
      img: "https://i.pinimg.com/736x/21/86/4a/21864a20145e17f3a4d47e3f6ae8f298.jpg",
      title: "SYSTEM",
      description:
        "Build habits and workflows that work even when you don’t feel like it.",
    },
    {
      id: 11,
      img: "https://i.pinimg.com/736x/21/86/4a/21864a20145e17f3a4d47e3f6ae8f298.jpg",
      title: "GROWTH",
      description: "Improve daily, even if it’s just 1% at a time.",
    },
  ];

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
    setUsed(the_trash);
  }

  function changeValue(e) {
    setSlider(e.target.value);
    setValue(slider);
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
            <button><Link to={"/register"}>Get Started</Link></button>
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
            min="0"
            max={data.length}
            value={slider}
            id="slider"
            onInput={(e) => changeValue(e)}
          />
        </div>
      </section>
      <br />
      <section id="fourth_part">
        <section id="inner_fourth_layer">
          {motto.map((i) => {
            return (
              <div className="product_motto_box">
                <div className="img_bg">
                  <img src={i.img} alt="" />
                </div>
                <span>
                  <h1>{i.title}</h1>
                  <p>
                    {i.description}
                  </p>
                </span>
              </div>
            );
          })}
        </section>
      </section>
    </main>
  );
}

export default Home;
