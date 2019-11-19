import React, { useState } from "react";
import "./Selectors.scss";

const Selectors = () => {
  const [number, setNumber] = useState(0);

  let chooseDog = e => {
    e.preventDefault();

    let random = Math.random();
    setNumber(random);
  };

  let chooseHotDog = e => {
    e.preventDefault();

    let random = Math.random();
    setNumber(random);
  };

  const RandomButtons = () =>
    number > 0.5 ? (
      <>
        <input
          id="hotdog-input"
          className="form-container__inputs"
          type="submit"
          onClick={chooseHotDog}
          value="Hot Dog"
        />
        <input
          id="dog-input"
          className="form-container__inputs"
          type="submit"
          onClick={chooseDog}
          value="Dog"
        />
      </>
    ) : (
      <>
        <input
          id="dog-input"
          className="form-container__inputs"
          type="submit"
          onClick={chooseDog}
          value="Dog"
        />
        <input
          id="hotdog-input"
          className="form-container__inputs"
          type="submit"
          onClick={chooseHotDog}
          value="Hot Dog"
        />
      </>
    );

  return (
    <form className="form-container">
      <RandomButtons />
    </form>
  );
};

export default Selectors;
