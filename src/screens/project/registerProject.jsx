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

const infoTitle = 'Create';

class registerProject extends Component {
  constructor() {
    super();
    this.state = {
      redirect: false,
      valueSelect: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({ valueSelect: value });
  }

  handleSubmit(values) {
    axios
      .post('http://localhost:5000/project', {
        title: values.title,
        description: values.description,
        objective: values.objective,
        CoordinatorId: '1ff1a81a-9781-4f20-96a5-2c84c8d826d1' //mudar depois
      })
      .then(res => {
        message.success('your project was successfully registered');
        this.setState({
          redirect: true
        });
      })
      .catch(error => {
        if (error.status === 404) {
          message.error('Ops... Server error, please contact the administrator');
        } else {
          message.error('Ops... Server error, please contact the administrator');
        }
      });
  }

  render() {
    if (this.state.redirect === false) {
      return (
        <RegisterProjectComponent
          {...this.state}
          infoTitle={infoTitle}
          initialValues={initialValues}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
      );
    } else {
      return <Redirect to="/user/listprojects" />;
    }
  }
}

export default registerProject;
