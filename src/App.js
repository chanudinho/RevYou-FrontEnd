import React, { Component } from 'react';
import './App.css';
import MainScreen from './screens/mainScreen/mainScreen'
import "./menu/Layout.css";

class App extends Component {
  constructor(){
    super();
    this.state = {
      login: false
    }
  }

  render() {
    return (
      <MainScreen login={this.state.login}/>
    );
  }
}

export default App;
