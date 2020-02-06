import React from 'react';

import Scores from '../../components/Scores/Scores';

import './Highscore.scss'

const array = [1,2,3,4,5,6,7,8,9,10]

export default class Highscore extends React.Component {
  state = {
    class: null
  }

  componentDidMount() {
    setTimeout(()=> {
      this.setState({
        class: 'animated rollIn'
      })
    },100)
  }
  render() {
    return (
      <section className="highscore">
        <div className="highscore__container animated bounceInDown">
          <h1 className={`highscore__title ${this.state.class}`}>HIGHSCORES</h1>
          <div className="highscore__list">
            {
              array.map(item => {
                return <Scores/>
              })
            }
          </div>
        </div>
        <div className="highscore__button-container">
          <button className="highscore__play-again">Play Again</button>
          {/* <button className="highscore__play-again">Play Again</button> */}
        </div>
      </section>
    )
  }
}