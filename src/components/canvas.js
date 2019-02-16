import React, { Component } from 'react';
import PropTypes from 'prop-types';

const canvasStyle = {
  margin: '20px',
  border: '1px dotted',
  background: 'azure',
};

const allGameImageUrls = [
  'http://i61.tinypic.com/2i95fzb.png', /* map sprite */
  'http://i62.tinypic.com/2its8ra.png', /* clown sprite */
  'http://i59.tinypic.com/xpyjr9.png', /* centaur sprite */
  'https://i.imgur.com/T49YqUc.png', /* crab */
];

const allGameImages = [];

class Canvas extends Component {
  constructor(props) {
    super(props);

    this.setupCanvas = this.setupCanvas.bind(this);
    this.renderMessage = this.renderMessage.bind(this);
  }

  componentDidMount() {
    this.loadImages(allGameImageUrls);
  }

  setupCanvas() {
    const { canvas } = this;
    const stage = canvas.getContext('2d');
    stage.font = '24px Helvetica';
    stage.textAlign = 'left';
    stage.textBaseline = 'top';
    stage.fillStyle = '#000';
    stage.lineWidth = 2;
    this.renderImage(stage);
    this.renderMessage(stage, this.props.message);
  }

  loadImages(assets) {
    let assetCount = 0;
    assets.map((url) => {
      const img = new Image();
      img.onload = () => {
        assetCount++;
        if (assetCount === allGameImageUrls.length) {
          console.log('All images loaded: ', allGameImages);
          this.setupCanvas();
        }
      };
      img.src = url;
      allGameImages.push(img);
    });
  }

  renderMessage(stage, message) {
    stage.fillText(message, 300, 100);
  }

  renderImage(stage) {
    stage.drawImage(allGameImages[3], 25, 0);
  }

  render() {
    return (
      <canvas
        style={canvasStyle}
        ref={(c) => { this.canvas = c; }}
        width={640}
        height={425}
      />
    );
  }
}

Canvas.defaultProps = {
  message: 'This is a canvas!',
};

Canvas.propTypes = {
  message: PropTypes.string,
};

export default Canvas;
