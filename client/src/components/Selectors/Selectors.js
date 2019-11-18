import React, { useState } from "react";
import "./Selectors.scss";

const Selectors = (props) => {
  const [number, setNumber] = useState(0);

  let useSubmitDog = e => {
    e.preventDefault();

    let random = Math.random();
    setNumber(random);
  };

  let useSubmitHotDog = e => {
    e.preventDefault();

    let random = Math.random();
    setNumber(random);
  };

  const RandomOne = () => (
    <>
      <input id="hotdog-input" className="form-container__inputs" onClick={props.changeData} type="submit" value="Hot Dog!" />
      <input id="dog-input" className="form-container__inputs" onClick={props.changeData} type="submit" value="Dog!" />
    </>
  );

  const RandomTwo = () => (
    <>
      <input id="dog-input" className="form-container__inputs" onClick={props.changeData} type="submit" value="Dog!" />
      <input id="hotdog-input"  className="form-container__inputs" onClick={props.changeData} type="submit" value="Hot Dog!" />
    </>
  );

  return (
    <form className="form-container">
      {number > 0.5 ? <RandomOne /> : <RandomTwo />}
    </form>
  );
};

export default Selectors;
