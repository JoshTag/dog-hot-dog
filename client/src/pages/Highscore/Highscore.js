import React from 'react';
import {Link} from 'react-router-dom';

import Scores from '../../components/Scores/Scores';
import Corgi from '../../components/Corgi/Corgi';
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
    
    const {highscore} = this.props
    // if (this.props.highscore) {
    //   console.log(this.props.highscore)
    // }
    // console.log(Object.values(this.props.highscore))
    return (
      <section className="highscore">
        <div className="highscore__container animated bounceInDown">
          <h1 className={`highscore__title ${this.state.class}`}>HIGHSCORES</h1>
          <div className="highscore__list">
            {
              highscore ? 
              Object.keys(highscore).map(item => {
                console.log(highscore[item])
                return <Scores item={highscore[item]} key={item}/>
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