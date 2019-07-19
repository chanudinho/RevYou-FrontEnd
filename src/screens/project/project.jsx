import React, { Component } from 'react';
import axios from 'axios';
import ProjectComponent from '../../components/projectDefinition/listProjects';

class project extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentWillMount(){
    this.getData();
  }

  getData() {
    axios.get(`http://localhost:5000/researcher/myprojects/chanudinho@hotmail.com`).then(res => {
      let data = res.data.map(data => {
        return {
          name: data.title,
          cordinator: 'Antônio',
          key: data.id
        };
      });
      this.setState({ data });
    });
  }
  
  render() {
    return <ProjectComponent {...this.state} />;
  }
}

export default project;
