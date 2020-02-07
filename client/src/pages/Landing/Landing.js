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
      {/* <div className="dog-container">
        <img className="dog-img" src={dogSVG} alt="Dog" />
        <div>
          <img className="dog-costume" src={dogCostume} alt="Dog In Hot Dog Costume"/>
          <img className="dog-costume" src={dogCostume} alt="Dog In Hot Dog Costume"/>
          <img className="dog-costume" src={dogCostume} alt="Dog In Hot Dog Costume"/>
          <img className="dog-costume" src={dogCostume} alt="Dog In Hot Dog Costume"/>
          <img className="dog-costume" src={dogCostume} alt="Dog In Hot Dog Costume"/>
        </div>
      </div> */}
      {/* <div className="corgi-container">
        <img src={corgi} alt="corgi"/>
        <img src={corgiButt} alt="corgi"/>
      </div> */}
      <img className="doge" src={doge} alt="Doge Head" />
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
    </div>
  );
}
