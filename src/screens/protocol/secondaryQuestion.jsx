import React, { Component } from 'react';
import SecondaryQuestionComponent from '../../components/protocol/secondaryQuestionComponent';

class SecondaryQuestion extends Component {
  constructor() {
    super();
    this.state = {
      counter: 1
    };
    this.handleAddQuestion = this.handleAddQuestion.bind(this);
    this.handleRemoveQuestion = this.handleRemoveQuestion.bind(this);
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
    console.log(value);
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
