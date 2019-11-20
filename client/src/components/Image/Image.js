import React from 'react';

import './Image.scss';

class Image extends React.Component {
  render() {
    if (!this.props.data)  {
      return <p className="image__gif">Loading...</p>
    }
    
    return (
      <div className="image">
        <img className="image__gif" src={this.props.data.images.original.url} alt="Hot dog or dog"/>
      </div>
      // null
    )
  }
}

export default Image;