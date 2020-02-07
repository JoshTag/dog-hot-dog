import React, { useState, useEffect } from "react";
import "./Selectors.scss";
import styled from "styled-components";
import "../../styles/_Master.scss";


const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 225px;
  justify-content: space-between;
  @media(min-width: 48rem) {
    width: 400px;
  }
`;

const Button = styled.button`
  width: 100px;
  height: 50px;
  font-size: 1rem;
  border: none;
  background-color: ${props => props.btnTheme === "red" ? "#ff0000" : "#ffff00"};
  color: ${props => (props.btnTheme === "red" ? "#ffff00" : "#ff0000")};
  border: 2px solid ${props => (props.btnTheme === "red" ? "#ffff00" : "#ff0000")};
  :focus {outline:0;}
  @media(min-width: 48rem) {
    width: 175px;
    height: 75px;
    font-size: 1.5rem;
  }
`;

const Selectors = props => {
  const [dogBtn, setDogBtn] = useState("");
  const [hotDotBtn, setHotDogBtn] = useState("");
  const [btnPosition, setBtnPosition] = useState(1);

  useEffect(() => {
    switchBtn();
  }, []);

  const handleClick = e => {
    props.changeData();
    props.checkAnswer(e);
    switchBtn();
  };

  const switchBtn = () => {
    let colours = ["red", "yellow"];
    let d = colours[Math.floor(Math.random() * colours.length)];
    let hd = colours[Math.floor(Math.random() * colours.length)];

    setDogBtn(d);
    setHotDogBtn(hd);
    setBtnPosition(Math.random());
  };

  console.log(hotDotBtn, dogBtn)

  return (
    <BtnContainer>
      {btnPosition > 0.5 ? (
        <>
          <Button btnTheme={dogBtn} onClick={handleClick} type="submit" value="Hot Dog">
            Hawt Dawg
          </Button>
          <Button btnTheme={hotDotBtn} onClick={handleClick} type="submit" value="Dog">
            Dawg
          </Button>
        </>
      ) : (
        <>
          <Button btnTheme={dogBtn} onClick={handleClick} type="submit" value="Dog">
            Dawg
          </Button>
          <Button btnTheme={hotDotBtn} onClick={handleClick} type="submit" value="Hot Dog">
            Hawt Dawg
          </Button>
        </>
      )}
    </BtnContainer>
  );
};

export default Selectors;
