import React, { Component } from 'react';
import Header from './Header/Header.js'
import './MainScreen.css';

class MainScreen extends Component {
  state = {
    isClicking: false,
    title: 'pepito',
    description: 'Es crack',
  }
  render() {
    console.log(this.state)
    return (
      <div className="container">
        <Header title='Clase 5'/>
        <div className="mainScreenBody">
          {this.state.isClicking
            ? 'Es crack'
            : 'No es crack mailisimo'
          }
        </div>
        <button
          className="mainScreenButton"
          onClick={
            () => this.setState({
              isClicking: !this.state.isClicking,
            })
          }
        >
          LALALALAL
        </button>
        <Header title='CopyRight'/>
      </div>
    );
  }
}

export default MainScreen;
