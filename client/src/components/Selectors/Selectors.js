import React, { useState } from "react";
import "./Selectors.scss";

const Selectors = () => {
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
      <input id="hotdog-input" className="form-container__inputs" type="submit" onClick={useSubmitHotDog} value="Hot Dog!" />
      <input id="dog-input" className="form-container__inputs" type="submit" onClick={useSubmitDog} value="Dog!" />
    </>
  );

  const RandomTwo = () => (
    <>
      <input id="dog-input" className="form-container__inputs" type="submit" onClick={useSubmitDog} value="Dog!" />
      <input id="hotdog-input"  className="form-container__inputs" type="submit" onClick={useSubmitHotDog} value="Hot Dog!" />
    </>
  );

  return (
    <form className="form-container">
      {number > 0.5 ? <RandomOne /> : <RandomTwo />}
    </form>
  );
};

export default Selectors;
