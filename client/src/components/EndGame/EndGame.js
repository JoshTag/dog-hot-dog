import React from 'react'
import Modal from 'react-modal';

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
    return (
      <div>
        <Modal
          isOpen={this.props.modalIsOpen}
          onRequestClose={this.props.closeModal}
          style={customStyles}
          shouldCloseOnOverlayClick={false}
        >
 
          <h2>Final Score</h2>
          <div>Your Score Was {this.props.finalScore.right}/10</div>
          <button onClick={this.props.closeModal}>Play Again</button>
        </Modal>
      </div>
    );
  }
}

export default EndGame