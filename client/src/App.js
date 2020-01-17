import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

// components
import PlayerList from './components/PlayerList';
import ThemeChanger from './components/ThemeChanger';

// assets
// import Moon from './img/moon.svg';
// import Sun from './img/sun.svg';

const Container = styled.div`
  width: 100%;

  .header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5%;
    height: 5rem;
    background: #444444;
    border-bottom: 1px solid #1a1a1a;

    h1 {
      color: #fff;
      font-weight: 300;
      font-size: 2rem;
    }
  }

  .controls {

    img {
      width: 3rem;
      transition: all 300ms;

      &:hover {
        transition: opacity 300ms;
        opacity: 0.5;
        cursor: pointer;
      }
    }
  }
`;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: []
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/api/players`)
      .then((res) => {
        // console.log(res);
        this.setState({ players: res.data })
      })
      .catch((err) => {
        console.log(`Uh oh, there was an error: ${err}`);
      })
  }

  totalPlayers() {
    let totalPlayers = this.state.players.reduce((acc, current) => {
      return acc = acc + 1;
    }, 0);
    // console.log(totalPlayers);
  }

  render() {
    return (
      <Container>
        <div data-testid="header" className="header">
          <h1 data-testid="logo">Women's World Cup Soccer Players</h1>

          {/* <div className="controls">
            <img src={Moon} alt="Night Mode" />
            <img src={Sun} alt="Day Mode" />
          </div> */}

          <ThemeChanger />
        </div>

        <PlayerList players={this.state.players} />
        {this.totalPlayers()}
      </Container>
    )
  }
}

export default App;
