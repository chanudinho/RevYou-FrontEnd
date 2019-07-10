import React, {Component} from 'react';
import './login.css';
import axios from 'axios'
import LoginComponent from '../../components/projectDefinition/loginComponent';


class Login extends Component {
  constructor(){
    super();
    this.state = {
      email: '',
      password: '',
      modalVisible: false
    }
    this.showModal = this.showModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  showModal () {
    this.setState({
      modalVisible: true
    })
  }

  handleOk = () => {
    this.setState({
      modalVisible: false
    })
  }
  
  handleCancel = () => {
    this.setState({
      modalVisible: false
    })
  }
  
  handleSubmit (values){
    axios.get(`http://localhost:5000/researcher/${values.email}`).then(res => 
      {
        if(res.status === 202){
          console.log(res);
        }
      }
      ).catch(error => {
        if(error.request.status === 404){
          console.log("usuario inexistente");
        }else{
          console.log("error interno");
        }
      })
  }

  render() {
    return (
      <LoginComponent {...this.state} 
        initialValues={this.state} 
        handleSubmit={this.handleSubmit}
        showModal={this.showModal}
        handleCancel={this.handleCancel}
        handleOk={this.handleOk}
      />
    ) 
  }
}

export default Login;
