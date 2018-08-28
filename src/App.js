import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Setting from './components/Setting';


//test data
import testData from './input.json';

console.log(testData);


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Setting</h1>
        </header>
        
        <Setting source="http://localhost:8080/" />

      </div>
    );
  }
}

export default App;
