import React from 'react';
import {Link} from 'react-router-dom';

import './Button.scss';

export default class Button extends React.Component {
  render() {
    console.log(this.props.type)
    return (
      <button type={`${this.props.type}`} onClick={this.props.click} className="button">{this.props.content}</button>
    )
  }
}