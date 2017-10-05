import React, { Component } from 'react';
import logo from './logo.svg';
import {Header} from './Components';
import './App.css';

class App extends Component {
  constructor (props){
    super(props);

    this.state = {
      guests:[]
    };
  }



  render() {
    return (
      <div className="App">
        <Header />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
