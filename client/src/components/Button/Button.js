import React from 'react';
import {Link} from 'react-router-dom';

import './Button.scss';

export default class Button extends React.Component {
  render() {
    return (
      <Link to={this.props.path} onClick={this.props.click}className="button">{this.props.content}</Link>
    )
  }
}