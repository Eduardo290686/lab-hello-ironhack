import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="top-container">
          <nav className="navigation">
            <img src="./images/ironhack-logo.svg" />
            <img src="./images/menu-top.svg" />
          </nav>
          <div className="right-left-container">
            <div className="left-container">
              <h1>Say hello to ReactJs</h1>
              <h2>
                You will learn a Frontend framework from
                scratch, to became a Ninja Developer.
              </h2>
              <div className="button">
                Awesome!
              </div>
            </div>
            <div className="right-container">
              <img src="./images/react-logo.svg" className="react-logo" />
            </div>
          </div>
        </div>
        <div className="bottom-container">
          <div className="react-characteristics">
            <img src="./images/icon1.png" className="icon" />
            <h3>Declarative</h3>
            <p>
              React makes it painless to create interactive UIs.
            </p>
          </div>
          <div className="react-characteristics">
            <img src="./images/icon2.png" className="icon" />
            <h3>Components</h3>
            <p>
              Build encapsulated components that manage their state.
            </p>
          </div>
          <div className="react-characteristics">
            <img src="./images/icon3.png" className="icon" />
            <h3>Single Way</h3>
            <p>
              A set of inmutable values are passed to the components.
            </p>
          </div>
          <div className="react-characteristics">
            <img src="./images/icon4.png" className="icon" />
            <h3>JSX</h3>
            <p>
              Statycally typed, designed to run on modern browsers.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
