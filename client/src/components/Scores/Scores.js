import React from 'react';

import './Scores.scss';

export default class Scores extends React.Component {
  render() {
    const {name, score, time} = this.props.item
    return (
      <div className="scores">
        <p className="scores__entry">{name.toUpperCase()}</p>
        <p className="scores__entry">{score}</p>
        <p className="scores__entry">{time + ' secs'}</p>
      </div>  
    )
  }
}