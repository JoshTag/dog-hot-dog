import React from "react";
import "./main.scss";
import Axios from "axios";

// Component Imports
import Selectors from "../../components/Selectors";
import Image from "../../components/Image/Image";
import GameStats from "../../components/GameStats";

require("dotenv").config();

const apiKey = process.env.REACT_APP_GIPHY_API_KEY;

class Main extends React.Component {
  state = {
    dog: [],
    hotDog: [],
    image: 0,
    answer: null,
    count: 0,
    right: 0,
    wrong: 0,
    finalScore: {}
  };

  componentDidMount() {
    this.getHotDogData(apiKey);
    this.getDogData(apiKey);
  }

  componentDidUpdate() {
    if (this.state.count >= 10) {
      alert("game over")
    }
  }

  getDogData = key => {
    Axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${key}&q=dog`).then(
      response => {
        this.setState({
          dog: response.data.data
        });
        this.sendData();
      }
    );
  };

  getHotDogData = key => {
    Axios.get(
      `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=hotdog`
    ).then(response => {
      this.setState({
        hotDog: response.data.data
      });
      this.sendData();
    });
  };

  getRandomInt = max => {
    return Math.floor(Math.random() * Math.floor(max));
  };

  sendData = () => {
    let num = this.getRandomInt(2);
    let i = this.getRandomInt(25);
    if (num === 0) {
      this.setState({
        image: this.state.dog[i],
        answer: "Dog"
      });
    } else {
      this.setState({
        image: this.state.hotDog[i],
        answer: "Hot Dog"
      });
    }
  };

  checkAnswer = e => {
    e.preventDefault();

    if (this.state.answer === e.target.value) {
      let count = this.state.right + 1
      this.setState({
        right: count
      });
    } else {
      let count = this.state.wrong + 1
      this.setState({
        wrong: count
      });
    }

    let counter = this.state.count + 1
    this.setState({
      count: counter
    });
  };

  render() {
    console.log("Answer", this.state.answer);
    console.log(this.state.right, this.state.wrong, this.state.count);

    return (
      <>
        <h1>DAWG OR HAWT DAWG?!?!</h1>
        <Image data={this.state.image} />
        <GameStats right={this.state.right} wrong={this.state.wrong} />
        <Selectors changeData={this.sendData} checkAnswer={this.checkAnswer} />
      </>
    );
  }
}

export default Main;
