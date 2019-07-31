import React, { Component } from 'react';
import LanguageComponent from '../../components/protocol/language';

let languages = [];

class Language extends Component {
  constructor() {
    super();
    this.state = {
      languages: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(value) {
    languages = value;
    this.setState({
      languages: languages
    });
  }

  handleSubmit() {
    console.log(this.state.languages);
  }

  render() {
    return (
      <LanguageComponent
        {...this.state}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default Language;
