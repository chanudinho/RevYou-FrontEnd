import React, { Component } from 'react';
import SearchEngineComponent from '../../components/protocol/searchEngine';

let bases = [];

class SearchEngine extends Component {
  constructor() {
    super();
    this.state = {
      bases: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(value) {
    bases = value;
    this.setState({
      bases: bases
    });
  }

  handleSubmit() {
    console.log(this.state.bases);
  }

  render() {
    return (
      <SearchEngineComponent
        {...this.state}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default SearchEngine;
