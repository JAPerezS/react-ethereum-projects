import React, { Component } from "react";

class ImageCard extends Component {
  render() {
    return (
      <div>
        <img alt={this.props.image.description} src={this.props.urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
