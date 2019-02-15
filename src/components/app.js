import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Canvas from './canvas';

class App extends Component {

  constructor(props) {
    super(props);
    // add more to the constructor here
  }

  render() {
    return (
      <React.Fragment>
        <Canvas message="Hello from Canvas!" />
      </React.Fragment>
    );
  }
}

export default App;
