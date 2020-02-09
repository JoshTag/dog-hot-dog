import React from 'react'
import Modal from 'react-modal';

import Button from '../Button/Button';

import './EndGame.scss';

Modal.setAppElement('#root')

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class EndGame extends React.Component {

  render() {

    const { finalTime, right } = this.props.finalScore
    let centiseconds = ("0" + (Math.floor(finalTime / 10) % 100)).slice(-2);
    let seconds = ("0" + (Math.floor(finalTime / 1000) % 60)).slice(-2);
    let minutes = ("0" + (Math.floor(finalTime / 60000) % 60)).slice(-2);

    return (
      <div>
        <Modal
          isOpen={this.props.modalIsOpen}
          onRequestClose={this.props.closeModal}
          style={customStyles}
          shouldCloseOnOverlayClick={false}
        >
          <div className="modal">
            <h1 className="modal__title animated bounceInLeft">Final Score</h1>
            <div className="modal__container">
              <div className="modal__score-container">
              <p className="modal__score">Score: {right}/20</p>
                <p className="modal__time-title">Time: {`${minutes}:${seconds}:${centiseconds}`}</p>
              </div>
              <form className="modal__form" onSubmit={(event)=>this.props.newPost(event, finalTime, right, this.props)}>
                <label className="modal__label" htmlFor="name">Enter your name: </label>
                <input className="modal__input" type="text" name="firstName" maxLength="14" placeholder="Enter Name..." required></input>
                <div className="modal__button-container">
                <button type="submit" onClick={this.props.click} className="button">Submit</button>
                <Button click={this.props.closeModal} path="/play" content="Play Again"/>
              </div>
            </form>
            </div>
            
          </div>
        </Modal>
      </div>
    );
  }
}

export default EndGame