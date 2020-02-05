import React from 'react';

import './Scores.scss';

export default class Scores extends React.Component {
  render() {
    return (
      <div className="scores">
        <p className="scores__entry">JOSHUA T.</p>
        <p className="scores__entry">17/20</p>
        <p className="scores__entry">200 sec</p>
      </div>  
    )
  }
}