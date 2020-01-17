import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

// components

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: []
    }
  }

  render() {
    return (
      <>
        <h1>Women's World Cup Soccer Players</h1>
      </>
    )
  }
}

export default App;
