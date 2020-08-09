import React, { Component } from 'react';
import Category from './components/Category';
import './App.css';

class App extends Component {
  render () {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header> */}
        <div className="row">
          <div className="col-xs-1-12">
            <Category name="Youtube links" link="https://www.youtube.com/watch?v=W-MihXf7Y2c&list=RDW-MihXf7Y2c&start_radio=1"/>:
            Thich thi nhich
          </div>
          <div className="col-xs-1-12">
            <Category name="Facebook saved links" link="https://www.facebook.com/"/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
