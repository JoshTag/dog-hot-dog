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
  }

  startCountDown = () => {
    if(this.state.startTime > 0 ) {
      this.setState(prevState => ({
        startTime: prevState.startTime - 1
      }));
    } else {
      clearInterval(this.countDownTimer);
    }
  };

  countDownTimer = () => setInterval(this.startCountDown, 1000);

  componentDidUpdate() {
    if (this.state.count >= 10 && !this.state.modalIsOpen) {
      this.openModal();
      this.setState({
        finalScore: { right: this.state.right, wrong: this.state.wrong },
        count: 0,
        right: 0,
        wrong: 0
      });
    }
  }

  // Modal Functionality
  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
    window.location.reload();
  };

  getDogData = () => {
    let i = this.getRandomInt(20);
    let dogs = [];

    Axios.get(
      `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=dog&offset=${i}&limit=25`
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

  getHotDogData = () => {
    let i = this.getRandomInt(20);
    let hotDogs = [];

    Axios.get(
      `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=hot%20dog&offset=${i}&limit=25`
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

  preloadImage = url => {
    let img = new Image();
    img.src = url;
  };

  render() {
    // console.log(this.state.right, this.state.wrong, this.state.count);
    console.log(this.state.startTime);
    return (
      <div className="main">
        <h1>DAWG OR HAWT DAWG?!?!</h1>
        {this.state.startTime === 0 ? (
          <>
            <Image data={this.state.image} />
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
            <p>Game Starting in {this.state.startTime}</p>
            <img
              className="loading-gif"
              src={this.state.loadingGif}
              alt="cat spinning around loading gif"
            />
          </>
        )}
      </div>
    );
  }
}

export default Main;
