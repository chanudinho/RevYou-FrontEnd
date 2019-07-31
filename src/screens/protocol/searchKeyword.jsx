import React, { Component } from 'react';
import SearchKeywordComponent from '../../components/protocol/searchKeyword';

let keywords = [];

class SearchKeyword extends Component {
  constructor() {
    super();
    this.state = {
      keywords: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(value) {
    keywords = value;
    this.setState({
      keywords: keywords
    });
  }

  handleSubmit() {
    console.log(this.state.keywords);
  }

  render() {
    return (
      <SearchKeywordComponent
        {...this.state}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default SearchKeyword;
