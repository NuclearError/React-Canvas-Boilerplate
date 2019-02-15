import React, { Component } from 'react';
import PropTypes from 'prop-types';

const canvasStyle = {
  border: '1px dotted',
  background: 'thistle',
};

class Canvas extends Component {
  constructor(props) {
    super(props);

    this.setupCanvas = this.setupCanvas.bind(this);
    this.renderMessage = this.renderMessage.bind(this);
  }

  componentDidMount() {
    this.setupCanvas();
  }

  setupCanvas() {
    const { canvas } = this;
    const stage = canvas.getContext('2d');
    stage.font = '24px Helvetica';
    stage.textAlign = 'left';
    stage.textBaseline = 'top';
    stage.fillStyle = '#000';
    stage.lineWidth = 2;
    this.renderMessage(stage, this.props.message);
  }

  renderMessage(stage, message) {
    stage.fillText(message, 100, 100);
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
