import React from 'react';

import './Scores.scss';

export default class Scores extends React.Component {

  changeTime = (timerTime) => {
    let centiseconds = ("0" + (Math.floor(timerTime / 10) % 100)).slice(-2);
    let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
    let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);

    return `${minutes}:${seconds}:${centiseconds}`
  }

  render() {
    const {name, score, time} = this.props.item
    return (
      <div className="scores">
        <p className="scores__entry">{name.toUpperCase()}</p>
        <p>{score + "/20"}</p>
        <p>{this.changeTime(time)}</p>
      </div>  
    )
  }
}