import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import MainHeader from './screens/MainHeader/index';
import HomeMainSection from './screens/HomeMainSection/index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainHeader />
        <HomeMainSection />
      </div>
    );
  }
}

export default App;
