import React from 'react';

import './Image.scss';

class Image extends React.Component {
  render() {
    console.log(this.props.data)
    if (!this.props.data)  {
      return <p>Loading...</p>
    }
    
    return (
      <div className="image">
        <img className="image__gif" src={this.props.data.images.original.url} ></img>
      </div>
      
    )
  }
}

export default Image;