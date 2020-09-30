import React, { Component } from 'react';
import Body from './components/body';
import Header from './components/header';
import './App.css';

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Header />
        <Body />
      </div>
    );
  }
}

export default App;
