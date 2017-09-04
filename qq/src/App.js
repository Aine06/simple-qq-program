import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Header from './Header/Header'  // 引入Header组件
import Main from './Main/Main'  // 引入Main组件

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Main/>
      </div>
    );
  }
}

export default App;


//<div className="App-header">
//  <img src={logo} className="App-logo" alt="logo" />
//  <h2>Welcome to React</h2>
//</div>
//<p className="App-intro">
//    To get started, edit <code>src/App.js</code> and save to reload.
//</p>