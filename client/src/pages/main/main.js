import React from "react";
import "./main.scss";
import Axios from "axios";
// import loading from "../../assets/loading.gif";

// Component Imports
import Selectors from "../../components/Selectors";
import Image from "../../components/Image/Image";
import GameStats from "../../components/GameStats";
import EndGame from "../../components/EndGame";

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
    finalScore: {},
    timerOn: false,
    timerStart: 0,
    timerTime: 0,
    modalIsOpen: false,
    startTime: 5,
    loadingGif: ""
  };

  componentDidMount() {
    Axios.get(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=loading`)
      .then(res => {
        this.setState({
          loadingGif: res.data.data.images.original.url
        })
      })

    this.getHotDogData();
    this.getDogData();

    this.countDownTimer();
    setTimeout(() => {
      this.sendData()
    }, 3000);

    setTimeout(() => {
      this.startTimer()
    }, 5000);
  }

  
  
  componentDidUpdate() {
    if (this.state.count >= 20 && !this.state.modalIsOpen) {
      this.openModal();
      this.setState({
        finalScore: { right: this.state.right, wrong: this.state.wrong, finalTime: this.state.timerTime },
        count: 0,
        right: 0,
        wrong: 0
      });
      this.stopTimer();
    }
  }
  
  // Count Down Timer
  countDownTimer = () => setInterval(this.startCountDown, 1000);

  startCountDown = () => {
    if(this.state.startTime > 0 ) {
      this.setState(prevState => ({
        startTime: prevState.startTime - 1
      }));
    } else {
      clearInterval(this.countDownTimer);
    }
  };

  // Modal Functionality
  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
    window.location.reload();
  };

  // Get Dog Data
  getDogData = () => {
    let i = this.getRandomInt(20);
    let dogs = [];

    Axios.get(
      `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=dog&offset=${i}&limit=40`
    )
      .then(res => {
        res.data.data.forEach(item => {
          dogs.push(item.images.downsized_medium.url);
        });
      })
      .then(() => {
        this.setState({
          dog: dogs
        });
      })
      .then(() => {
        this.state.dog.forEach(item => {
          this.preloadImage(item);
        });
      })
      .catch(err => {
        alert(err);
      });
  };

  // Get Hot Dog Data
  getHotDogData = () => {
    let i = this.getRandomInt(20);
    let hotDogs = [];

    Axios.get(
      `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=hot%20dog&offset=${i}&limit=40`
    )
      .then(res => {
        res.data.data.forEach(item => {
          hotDogs.push(item.images.downsized_medium.url);
        });
      })
      .then(() => {
        this.setState({
          hotDog: hotDogs
        });
      })
      .then(() => {
        this.state.hotDog.forEach(item => {
          this.preloadImage(item);
        });
      })
      .catch(err => {
        alert(err);
      });
  };

  // Randomizes Number
  getRandomInt = max => {
    return Math.floor(Math.random() * Math.floor(max));
  };

  // Sends Dog or Hot Dog Gif Based on Random Number
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

  // Checks the Answer of the Button Clicked
  checkAnswer = e => {
    e.preventDefault();

    if (this.state.answer === e.target.value) {
      let count = this.state.right + 1;
      this.setState({
        right: count
      });
    } else {
      let count = this.state.wrong + 1;
      this.setState({
        wrong: count
      });
    }

    let counter = this.state.count + 1;
    this.setState({
      count: counter
    });
  };

  // Preloads images?
  preloadImage = url => {
    let img = new Image();
    img.src = url;
  };

  // Timer Starter
  startTimer = () => {
    this.setState({
      timerOn: true,
      timerTime: this.state.timerTime,
      timerStart: Date.now() - this.state.timerTime
    });
    this.timer = setInterval(() => {
      this.setState({
        timerTime: Date.now() - this.state.timerStart
      });
    }, 10);
  };

  // Stops Timer
  stopTimer = () => {
    this.setState({ timerOn: false });
    clearInterval(this.timer);
  };

  // Reset Timer
  resetTimer = () => {
    this.setState({
      timerStart: 0,
      timerTime: 0
    });
  };

  render() {
    // console.log(this.state.right, this.state.wrong, this.state.count);

    const { timerTime } = this.state;
    let centiseconds = ("0" + (Math.floor(timerTime / 10) % 100)).slice(-2);
    let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
    let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);

    console.log(timerTime)
    return (
      <div className="main-game">
        <h1 className="main-game__title">DAWG OR HAWT DAWG?!?!</h1>
        {this.state.startTime === 0 ? (
          <>
            <Image data={this.state.image} />
            <p>Time: {minutes} : {seconds} : {centiseconds}</p>
            <GameStats right={this.state.right} wrong={this.state.wrong} />
            <Selectors
              changeData={this.sendData}
              checkAnswer={this.checkAnswer}
            />
            <EndGame
              modalIsOpen={this.state.modalIsOpen}
              closeModal={this.closeModal}
              finalScore={this.state.finalScore}
            />
          </>
        ) : (
          <>
            <img
              className="loading-gif"
              src={this.state.loadingGif}
              alt="Loading GIF"
            />
            <p className="countdown">Game Starting in {this.state.startTime}</p>
          </>
        )}
      </div>
    );
  }
}

export default Main;
