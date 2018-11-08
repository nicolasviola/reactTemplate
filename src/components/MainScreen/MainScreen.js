import React, { Component } from 'react';
import logo from '../../images/logo.svg';
import './MainScreen.css';

class MainScreen extends Component {
  render() {
    console.log('holaaaaaaa')
    return (
      <div className="container">
        <header className="mainScreen">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://goo.gl/ryMXJh"
            target="_blank"
            rel="noopener noreferrer"
          >
            Click aquí para acceder al Drive del curso
          </a>
        </header>
      </div>
    );
  }
}

export default MainScreen;
