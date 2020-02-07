import React, { useState, useEffect } from "react";
import "./Selectors.scss";
import styled from "styled-components";
import "../../styles/_Master.scss";
// import dog from "../../assets/dog.svg"


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
  border-radius: 5px;
  -webkit-box-shadow: 10px 10px 29px -13px rgba(0, 0, 0, 0.6);
  -moz-box-shadow: 10px 10px 29px -13px rgba(0, 0, 0, 0.6);
  box-shadow: 10px 10px 29px -13px rgba(0, 0, 0, 0.6);
  :focus {
    outline: 0;
  }
  :hover {
    cursor: pointer;
  }
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
