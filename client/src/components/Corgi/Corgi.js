import React from "react";
import corgi from "../../assets/corgi.svg";
import corgiButt from "../../assets/corgi-butt.svg";
import "./Corgi.scss"

export default function Corgi() {
  return (
    <div className="corgi-container">
      <img src={corgi} alt="corgi" />
      <img src={corgiButt} alt="corgi" />
    </div>
  );
}
