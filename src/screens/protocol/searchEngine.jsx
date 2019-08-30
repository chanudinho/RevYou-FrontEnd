import React, { Component } from 'react';
import axios from 'axios';
import SearchEngineComponent from '../../components/protocol/searchEngine';

const listbases = [
  'ACM',
  'IEEE',
  'Web of Science',
  'Springer',
  'Scopus',
  ' Science Direct',
  'Scielo',
  'Lilacs',
  'Google Academic'
];

class SearchEngine extends Component {
  constructor() {
    super();
    this.state = {
      basesBack: [],
      bases: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  handleChange(value) {
    this.setState({
      bases: value
    });
  }

  async handleSubmit() {
    try {
      console.log('oi');
      const bases = this.state.bases;
      const originalBases = this.state.basesBack;
      const ProjectId = this.props.project.id;
      let createBases = [];
      let assoaciateBases = [];
      let deleteBases = [];
      await bases.forEach(base => {
        if (originalBases.indexOf(base) === -1) {
          if (listbases.indexOf(base) === -1) {
            //create a new base
            createBases.push(base);
          }
          assoaciateBases.push(base); // assoaciate base to project
        }
      });
      await originalBases.forEach(base => {
        if (bases.indexOf(base) === -1) {
          deleteBases.push(base);
        }
      });
      if (createBases.length > 0) {
        console.log('createBases', createBases )
        await axios.post(`http://localhost:5000/searchEngine`, {
          bases: createBases
        });
      }
      if (assoaciateBases.length > 0) {
        console.log('assoaciateBases', assoaciateBases )
        await axios.post(`http://localhost:5000/searchEngine/createAssociation`, {
          bases: assoaciateBases,
          ProjectId
        });
      }
      if (deleteBases.length > 0) {
        console.log('delete', deleteBases )
        await axios.delete(`http://localhost:5000/searchEngine`,  { params: {
          bases: deleteBases,
          ProjectId
        }});
      }
      await this.getData();
    } catch (err) {
      console.log('error = ',err)
    }
  }

  getData() {
    const ProjectId = this.props.project.id;
    axios.get(`http://localhost:5000/searchEngine/${ProjectId}`).then(async res => {
      const bases = await res.data[0].SearchEngines.map(data => data.name);
      this.setState({ bases, basesBack: bases });
    });
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
