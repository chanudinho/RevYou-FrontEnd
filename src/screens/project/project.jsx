import React, { Component } from 'react';
import axios from 'axios';
import { message } from 'antd';
import ProjectComponent from '../../components/projectDefinition/listProjects';

class project extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentWillMount() {
    this.getData();
  }

  handleDelete(value) {
    return () => {
      console.log('value 2 ', value);
      const id = value;
      axios
        .delete(`http://localhost:5000/project/${id}`)
        .then(res => {
          window.location.reload();
        })
        .catch(error => {
          message.error('Ops... Server error, please contact the administrator');
        });
    };
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
    return <ProjectComponent {...this.state} handleDelete={this.handleDelete} />;
  }
}

export default project;
