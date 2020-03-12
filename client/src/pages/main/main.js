import React from "react";
import "./main.scss";
import Axios from "axios";
import {Link} from "react-router-dom"

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
    startTime: 3,
    loadingGif: "",
    loaded: false
  };
  _isMounted = false;

  componentDidMount() {
    Axios.get(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=loading`)
      .then(res => {
        this.setState({
          loadingGif: res.data.data.images.original.url
        })
      })

    Promise.all([this.getDogData(), this.getHotDogData()])
      .then(() => {
        this.sendData();
      })
      .then(() => {
        this.loadGame();
      })
      .catch(() => {
        alert("Oops! something went wrong...")
      })
  }

  componentDidUpdate() {
    if (this.state.count >= 20 && !this.state.modalIsOpen) {
      this.openModal();
      this.setState({
        finalScore: { 
          right: this.state.right,
          wrong: this.state.wrong,
          finalTime: this.state.timerTime 
        }
      });
      this.stopTimer();
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
    this.stopTimer();
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

  loadGame = () => {
    this.countDownTimer();
    this.setState({
      loaded: true
    })
    setTimeout(() => {
      this.startTimer();
    }, 3000);
  }

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
    let dogs = [];
    let apiLink = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=dog`
    let getArr = []

    for (let i = 0 ; i < 20 ; i++ ) {
      getArr.push(Axios.get(apiLink + `&hash=${parseInt(Math.random() * 999999)}`))
    }

    return new Promise((res, rej) => {
      Axios.all(getArr)
        .then(res => {
          res.forEach(item => {
            dogs.push(item.data.data.images.original.url);
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
            res();
          });
        })
        .catch(err => {
          alert(err);
          rej();
        });
    })
  };

  // Get Hot Dog Data
  getHotDogData = () => {
    let hotDogs = [];
    let apiLink = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=hot%20dog`

    let getArr = []

    for (let i = 0 ; i < 20 ; i++ ) {
      getArr.push(Axios.get(apiLink + `&hash=${parseInt(Math.random() * 999999)}`))
    }

    return new Promise((res, rej) => {
      Axios.all(getArr)
        .then(res => {
          res.forEach(item => {
            hotDogs.push(item.data.data.images.original.url);
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
            res();
          });
        })
        .catch(err => {
          alert(err);
          rej();
        });
    })
  };

  // Randomizes Number
  getRandomInt = max => {
    return Math.floor(Math.random() * max);
  };

  // Sends Dog or Hot Dog Gif Based on Random Number
  sendData = () => {
    let num = this.getRandomInt(2);
    let dogIndex = this.getRandomInt(this.state.dog.length - 1);
    let hotDogIndex = this.getRandomInt(this.state.hotDog.length - 1);

    return new Promise((res, rej) => {
      if (num === 0) {
        this.setState({
          image: this.state.dog[dogIndex],
          answer: "Dog",
        });
        this.state.dog.splice(this.state.dog.indexOf(this.state.dog[this.state.count]), 1)
        res();
      } else {
        this.setState({
          image: this.state.hotDog[hotDogIndex],
          answer: "Hot Dog",
        });
        this.state.hotDog.splice(this.state.hotDog.indexOf(this.state.hotDog[this.state.count]), 1)
        res();
      }
      rej();
    })
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

  refresh = () => {
    window.location.reload();
  }


  render() {

    const { timerTime } = this.state;
    let centiseconds = ("0" + (Math.floor(timerTime / 10) % 100)).slice(-2);
    let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
    let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);

    return (
      <div className="main-game">
        <h1 className="main-game__title">DAWG OR HAWT DAWG?!?!</h1>
        {this.state.startTime === 0 ? (
          <>
            <Image data={this.state.image} />
            <p className="main-game__timer">Time: <span>{minutes} : {seconds} : {centiseconds}</span></p>
            <GameStats right={this.state.right} wrong={this.state.wrong} />
            <Selectors
              changeData={this.sendData}
              checkAnswer={this.checkAnswer}
            />
            <button className="refresh" onClick={this.refresh}>Refresh</button>
            <EndGame
              modalIsOpen={this.state.modalIsOpen}
              closeModal={this.closeModal}
              finalScore={this.state.finalScore}
              newPost={this.props.newPost}
              {...this.props}
            />
          </>
        ) : (
          <>
            <img
              className="loading-gif"
              src={this.state.loadingGif}
              alt="Loading GIF"
            />
            {this.state.loaded ? 
              <p className="loading-message">Game Starting in {this.state.startTime}</p>
              :
              <p className="loading-message">Loading Game Gifs</p>
            }
          </>
        )}
        <Link className="links" to="/highscore">Highscores</Link>
        <Link className="links" to="/">Home</Link>
      </div>
    );
  }
}

export default Main;
