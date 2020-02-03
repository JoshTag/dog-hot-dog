import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Landing.scss";
import dogSVG from "../../assets/dog.svg";
import hotdogSVG from "../../assets/hot-dog.svg";
// import weiner from "../../assets/weiner-dog.svg"

const apiKey = process.env.REACT_APP_GIPHY_API_KEY;

export default function Landing() {
  // const [dogImg1, setDogImg1] = useState(
  //   "https://media0.giphy.com/media/3oEduFodl3UbrrHCfe/giphy.gif?cid=dc4fc341cc811f7bf59e48da2ca8f62e8b0092482a97ce8f&rid=giphy.gif"
  // );
  // const [dogImg2, setDogImg2] = useState(
  //   "https://media1.giphy.com/media/xTiTnJ8sYG1l9bSj0k/giphy-preview.webp?cid=dc4fc341a61629451d05608553ee120082fc3a903d538078&rid=giphy-preview.webp"
  // );
  // const [hotDogImg1, setHotDogImg1] = useState(
  //   "https://media0.giphy.com/media/UrQHy8pEdKBRzejqxv/giphy.gif?cid=dc4fc3411587b8bb5ef52bba50792c4aac64ecaf6724d3a7&rid=giphy.gif"
  // );
  // const [hotDogImg2, setHotDogImg2] = useState(
  //   "https://media3.giphy.com/media/jAV63tmDsCuo8/giphy-downsized-medium.gif?cid=dc4fc3417cd520d6d2e482f9524adbb71d63c0b1629abc2f&rid=giphy-downsized-medium.gif"
  // );

  // useEffect(() => {
  //     getData("dog", setDogImg1, 1800);
  //     getData("dogs", setDogImg2, 4000);
  //     getData("hot%20dog", setHotDogImg1, 3400);
  //     getData("hot%20dogs", setHotDogImg2, 1200);
  //   }, []);

  const getData = (item, setItem, time) => {
    setInterval(() => {
      axios
        .get(
          `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=${item}`
        )
        .then(res => {
          setItem(res.data.data.images.downsized_medium.url);
        });
    }, time);
  };

  return (
    <div className="landing">
      <h1 className="landing__title">
        <span className="landing__title--anim-one">DAWG </span>
        <span className="landing__title--anim-two">OR </span>
        <span className="landing__title--anim-three">HAWT DAWG?!?</span>
      </h1>
      <img className="dog-img" src={dogSVG} alt="Dog" />
      <img className="hot-dog hot-dog-one" src={hotdogSVG} alt="Hot Dog" />
      <img className="hot-dog hot-dog-two" src={hotdogSVG} alt="Hot Dog" />
      <img className="hot-dog hot-dog-three" src={hotdogSVG} alt="Hot Dog" />
      <img className="hot-dog hot-dog-four" src={hotdogSVG} alt="Hot Dog" />
      <img className="hot-dog hot-dog-five" src={hotdogSVG} alt="Hot Dog" />
      <img className="hot-dog hot-dog-six" src={hotdogSVG} alt="Hot Dog" />
      <Link className="landing__play-button" to="/play">
        PLAY!
      </Link>
      {/* <Link className="landing__leaderboard-button" to="/play">
        <img src={weiner} alt="weiner dog outline"/>
        <p>Leader Board</p>
      </Link> */}
      {/* <div className="landing__img-container">
        <img className="landing__imgs" src={dogImg1} alt="dog gif" />
        <img className="landing__imgs" src={hotDogImg1} alt="hot dog gif" />
        <img className="landing__imgs" src={hotDogImg2} alt="hot dog gif" />
        <img className="landing__imgs" src={dogImg2} alt="dog gif" />
      </div> */}
    </div>
  );
}
