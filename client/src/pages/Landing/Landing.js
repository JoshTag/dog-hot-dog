import React from "react";
import { Link } from "react-router-dom";
import "./Landing.scss";
import dogSVG from "../../assets/dog.svg";
import hotdogSVG from "../../assets/hot-dog.svg";
import doge from "../../assets/doge.svg";

import Corgi from "../../components/Corgi"

export default function Landing() {
  return (
    <div className="landing">
      <h1 className="landing__title">
        <span className="landing__title--anim-one">DAWG </span>
        <span className="landing__title--anim-two">OR </span>
        <span className="landing__title--anim-three">HAWT DAWG?!?</span>
      </h1>
      <img className="dog-img" src={dogSVG} alt="Dog" />
      <Corgi />
      <img className="doge" src={doge} alt="Doge Head" />
      <img className="hot-dog hot-dog-one" src={hotdogSVG} alt="Hot Dog" />
      <img className="hot-dog hot-dog-two" src={hotdogSVG} alt="Hot Dog" />
      <img className="hot-dog hot-dog-three" src={hotdogSVG} alt="Hot Dog" />
      <img className="hot-dog hot-dog-four" src={hotdogSVG} alt="Hot Dog" />
      <img className="hot-dog hot-dog-five" src={hotdogSVG} alt="Hot Dog" />
      <img className="hot-dog hot-dog-six" src={hotdogSVG} alt="Hot Dog" />
      <img className="hot-dog hot-dog-seven" src={hotdogSVG} alt="Hot Dog" />
      <Link className="landing__play-button" to="/play">
        PLAY!
      </Link>
      <Link className="landing__highscore-button" to="/highscore">
        Highscores
      </Link>
      <div className="tooltip">
        How to play?
        <span className="tooltip--hover">Click on the "Dawg" or "Hawt Dawg" Buttons to choose if the current gif is a dog or hot dog</span>
      </div>
      <div className="copyright">
        &copy; 2020 <a href="https://www.joshtag.com">Joshua Taguicana</a> & <a href="https://www.royleejr.com">Roy Lee Jr.</a>
      </div>
    </div>
  );
}
