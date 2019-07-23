import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { message } from 'antd';
import axios from 'axios';
import RegisterProjectComponent from '../../components/projectDefinition/registerProject';

const initialValues = {
  title: '',
  description: '',
  objective: ''
};

class registerProject extends Component {
  constructor() {
    super();
    this.state = {
      redirect: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleSubmit(values) {
    axios
      .post('localhost:5000/project', {
        title: values.title,
        description: values.description,
        objective: values.objective,
        CoordinatorId: '1ff1a81a-9781-4f20-96a5-2c84c8d826d1' //mudar depois
      })
      .then(res => {
        message.success('You have successfully registered');
        this.setState({
          redirect: true
        });
      })
      .catch(error => {
        message.error('Ops... Server error, please contact the administrator');
      });
  }

  render() {
    if (this.state.redirect === false) {
      return (
        <RegisterProjectComponent initialValues={initialValues} handleSubmit={this.handleSubmit} />
      );
    } else {
      return <Redirect to="/user/listprojects" />;
    }
  }
}

export default registerProject;
