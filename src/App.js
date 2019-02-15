import React, { Component } from 'react';
import Banner from './components/Banner';
import Jim from './components/Jim';
import hun from './hunter.png';
import Hunter from './components/Hunter';

import './App.css';

class App extends Component {
  render() {
    const funky = {
      "background": "#fff",
      "color": "#f00",
      "fontSize": "24px",
      "padding": "30px",
      "opacity": .78,
      "display": "inline-block",
  }
    const FunctionalComponent = () => (
      <div>
        <h1 style = {funky}><a href="https://codejoy-wins.github.io/">Jann Software</a></h1>
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
          <div id ="black"></div>
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
          <Jim/>
          {/* <img src={hun} alt="hunt"></img> */}
        </header>
        {/* <p>Below is one functional component with two different argurments as attributes</p>
        <HelloWorld name="pikachu"/>
        <HelloWorld name="charizard"/> */}
        <FunctionalComponent/>
      </div>
    );
  }
}

export default App;
