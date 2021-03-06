import React, { Component } from 'react';
import { connect } from 'react-redux';
import { message } from 'antd';
import axios from 'axios';
import InvitionalProjectComponent from '../../components/projectDefinition/invitationalProjects';

class InvitionalProject extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };

    this.getData = this.getData.bind(this);
    this.handleAccept = this.handleAccept.bind(this);
    this.handleDenied = this.handleDenied.bind(this);
  }

  componentWillMount() {
    this.getData();
  }

  getData() {
    const email = this.props.login.email;

    axios.get(`http://localhost:5000/project/invites/${email}`).then(res => {
      let data = res.data.map(data => {
        return {
          name: data.title,
          key: data.Inviteds[0].id
        };
      });
      this.setState({ data });
    });
  }

  handleAccept(value) {
    const id = value;
    axios
      .put(`http://localhost:5000/invitation/${id}`, {
        situation: 'accept'
      })
      .then(res => {
        this.getData();
      })
      .catch(err => {
        console.log(err);
        message.error('Ops... Server error, please contact the administrator');
      });
  }

  handleDenied(value) {
    const id = value;
    axios
      .put(`http://localhost:5000/invitation/${id}`, {
        situation: 'denied'
      })
      .then(res => {
        this.getData();
      })
      .catch(err => {
        message.error('Ops... Server error, please contact the administrator');
      });
  }

  render() {
    return (
      <InvitionalProjectComponent
        {...this.state}
        handleDenied={this.handleDenied}
        handleAccept={this.handleAccept}
      />
    );
  }
}

//redux
const mapStateToProps = state => ({
  login: state.login
});

export default connect(mapStateToProps)(InvitionalProject);
