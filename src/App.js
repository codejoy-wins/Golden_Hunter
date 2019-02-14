import React, { Component } from 'react';
import Banner from './components/Banner';
import logo from './logo.svg';
import hun from './hunter.png';
import Hunter from './components/Hunter';

import './App.css';

class App extends Component {
  render() {
    const funky = {
      "background": "#000",
      "color": "#f00",
      "fontSize": "24px",
      "padding": "30px",
      "opacity": .78,
      "display": "inline-block",
  }
    const FunctionalComponent = () => (
      <div>
        <h1 style = {funky}>Functional Component text</h1>
      </div>
    )

    const HelloWorld = ({name}) => (
      <div>{`Hi ${name}`}</div>
    );

    return (
      <div className="App">
        < Banner />
        {/* <FunctionalComponent/> */}
        <Hunter/>
        <header className="App-header">
          <img src={hun} className="App-logo" alt="logo" />
          <p>
            Hire <code>codejoy</code> to make your website.
          </p>
          <a
            className="App-link"
            href="https://codejoy-wins.github.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Portfolio
          </a>
          <img src={hun} alt="hunt"></img>
        </header>
        <p>Below is one functional component with two different argurments as attributes</p>
        <HelloWorld name="pikachu"/>
        <HelloWorld name="charizard"/>
      </div>
    );
  }
}

export default App;
