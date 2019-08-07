import React, { Component } from 'react';
import axios from 'axios';
import {message} from 'antd';
import SecondaryQuestionComponent from '../../components/protocol/secondaryQuestionComponent';

class SecondaryQuestion extends Component {
  constructor() {
    super();
    this.state = {
      counter: 1,
      initialValues: {
        description0: ''
      }
    };
    this.handleAddQuestion = this.handleAddQuestion.bind(this);
    this.handleRemoveQuestion = this.handleRemoveQuestion.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getData = this.getData.bind(this);
  }
  
  componentDidMount(){
    this.getData();
  }

  handleAddQuestion() {
    this.setState({ counter: this.state.counter + 1 });
  }

  handleRemoveQuestion() {
    if (this.state.counter > 1) {
      this.setState({ counter: this.state.counter - 1 });
    }
  }

  handleSubmit(value) {
    const ProjectId = this.props.project.id;
    axios.post('http://localhost:5000/secondaryQuestion', {
      description: value,
      ProjectId
    }).then(res => {
      message.sucess('Secondary Question was successfully registered');
    }).catch(err => {
      message.error('Ops... Server error, please contact the administrator');
    });
  }

  getData () {
    axios.get(`http://localhost:5000/secondaryQuestion/${this.props.project.id}`).then(async res =>{ 
    const counter = res.data.length
      let obj = {};
      await res.data.forEach((data, index) => {
        obj[`description${index}`] = data.description;
      })
      
      this.setState({ counter, initialValues: obj});
    });
  }

  render() {
    return (
      <SecondaryQuestionComponent
        {...this.state}
        handleSubmit={this.handleSubmit}
        handleAddQuestion={this.handleAddQuestion}
        handleRemoveQuestion={this.handleRemoveQuestion}
      />
    );
  }
}

export default SecondaryQuestion;
