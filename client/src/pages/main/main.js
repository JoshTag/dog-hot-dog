import React from 'react';
import './main.scss';

import Selectors from "../../components/Selectors"
import Axios from 'axios';

import Image from '../../components/Image/Image';

require("dotenv").config()
console.log(process.env.REACT_APP_GIPHY_API_KEY)

class Main extends React.Component{
  state = {
    dog: [],
    hotDog: []
  }

  componentDidMount () {
    this.getHotDogData(process.env.REACT_APP_GIPHY_API_KEY)
    this.getDogData(process.env.REACT_APP_GIPHY_API_KEY)

  }

  getDogData = (key) => {
    Axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${key}&q=dog`)
    .then(response => {
      this.setState({
        dog: response.data.data
      })
    })
  }

  getHotDogData = (key) => {
    Axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${key}&q=hotdog`)
    .then(response => {
      this.setState({
        hotDog: response.data.data
      })
    })
  }

  getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  }

  sendData = () => {
    let num = this.getRandomInt(2)
    let i = this.getRandomInt(26)
    if (num === 0) {
      return this.state.dog[i]
    }
    else {
      return this.state.hotDog[i]
    }
  }

  render() {
    return(
      <>
      <p>Main</p>
      <Image data={this.sendData()}/>
      <Selectors />
      </>
      
    )
  }
}

export default Main;