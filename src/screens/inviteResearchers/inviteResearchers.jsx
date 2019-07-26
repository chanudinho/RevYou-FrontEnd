import React, { Component } from 'react';
import { message } from 'antd';
import InviteResearchers from '../../components/projectDefinition/inviteResearchers';
import axios from 'axios';

class inviteResearchers extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentWillMount() {
    this.getData();
  }

  handleSubmit(e) {
    const email = e.target.value || document.getElementById('invite').value;
    console.log('convidando = ', email);
    axios
      .post(`http://localhost:5000/invitation`, {
        email,
        ProjectId: '16367eac-a11e-4bab-9c71-0d5809ab4c8e' //mudar depois
      })
      .then(res => {
        this.getData();
      })
      .catch(error => {});
  }

  handleDelete(value) {
    axios
      .delete(`http://localhost:5000/invitation/${value}`)
      .then(res => {
        this.getData();
      })
      .catch(error => {
        message.error('Ops... Server error, please contact the administrator');
      });
  }

  getData() {
    axios
      .get(`http://localhost:5000/project/inviteds/16367eac-a11e-4bab-9c71-0d5809ab4c8e`)
      .then(res => {
        let data = res.data.map(data => {
          return {
            email: data.email,
            situation: data.situation,
            key: data.id
          };
        });
        this.setState({ data });
      });
  }

  render() {
    return (
      <InviteResearchers
        {...this.state}
        handleSubmit={this.handleSubmit}
        handleDelete={this.handleDelete}
      />
    );
  }
}

export default inviteResearchers;
