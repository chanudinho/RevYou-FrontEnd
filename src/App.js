import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import TelaLogin from './screens/telaLogin';

const handleSubmit = (e) => {
  console.log(e);
}

class App extends Component {
  constructor(){
    super()
    this.state = {
      email: '',
      password: ''
    }
  }

  handleEmailChange (e) {

  }

  handlePasswordChange (e) {

  }

  

  render() {
    return (
      <TelaLogin/>
    ) 
  }
}

export default App;
