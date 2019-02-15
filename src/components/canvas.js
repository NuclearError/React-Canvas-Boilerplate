import React, { Component } from 'react';
import PropTypes from 'prop-types';

const canvasStyle = {
  border: '1px dotted',
  background: 'ghostwhite',
};

class Canvas extends Component {
  static setupCanvas() {
    const canvas = this.canvas;
    const stage = canvas.getContext('2d');
    stage.font = '24px Helvetica';
    stage.textAlign = 'left';
    stage.textBaseline = 'top';
    stage.fillStyle = '#ff0000';
    stage.lineWidth = 2;
    stage.strokeStyle = '#000';
    this.renderMessage(stage, this.props.message);
    console.log('setupCanvas complete!');
  }

  static renderMessage(stage, message) {
    stage.fillText(message, 100, 100);
  }

  constructor(props) {
    super(props);

    // method bindings go here
    this.constructor.setupCanvas = this.constructor.setupCanvas.bind(this);
    this.constructor.renderMessage = this.constructor.renderMessage.bind(this);
  }

  componentDidMount() {
    this.setupCanvas();
  }

  render() {
    return (
      <canvas
        style={canvasStyle}
        ref={c => { this.canvas = c }}
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
