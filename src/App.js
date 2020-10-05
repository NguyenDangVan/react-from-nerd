import React, { Component } from 'react';
import Body from './components/body';
import Header from './components/header';
import './App.css';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

library.add(faTrash);
library.add(faEdit);

class App extends Component {
  render () {
    return (
      <div className='movie-app'>
        <Header />
        <Body />
      </div>
    );
  }
}

export default App;
