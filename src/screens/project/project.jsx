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
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentWillMount() {
    this.getData();
  }

  handleDelete(value) {
    const id = value;
    axios
      .delete(`http://localhost:5000/project/${id}`)
      .then(res => {
        this.getData();
      })
      .catch(error => {
        message.error('Ops... Server error, please contact the administrator');
      });
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
