import React from "react";
import "./Selectors.scss";

const Selectors = (props) => {

  const handleClick = (e) => {
    props.changeData()
    props.checkAnswer(e)
  }

  return (
    <div>
      <button id="hotdog-input" className="form-container__inputs" onClick={handleClick} type="submit" value="Hot Dog" >Hawt Dawg</button>
      <button id="dog-input" className="form-container__inputs" onClick={handleClick} type="submit" value="Dog" >Dawg</button>
    </div>
  );
};

export default Selectors;
