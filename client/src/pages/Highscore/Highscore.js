import React from 'react';
import {Link} from 'react-router-dom';

import Scores from '../../components/Scores/Scores';
import Corgi from '../../components/Corgi/Corgi';
import './Highscore.scss'

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
    
    const {highscore} = this.props

    return (
      <section className="highscore">
        <div className="highscore__container animated bounceInDown">
          <h1 className={`highscore__title ${this.state.class}`}>HIGHSCORES</h1>
          <div className="highscore__list">
            {
              highscore ? 
              highscore.map(item => {
                return <Scores item={item} key={item.name + item.time}/>
              })
              :null
            }
          </div>
        </div>
        <div className="highscore__button-container">
          <Link to="/play" className="highscore__play-again">Play Again</Link>
          {/* <button className="highscore__play-again">Play Again</button> */}
        </div>
        <Corgi/>
      </section>
    )
  }
}