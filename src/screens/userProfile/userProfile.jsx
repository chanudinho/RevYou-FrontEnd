import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { message } from 'antd';
import UserProfileComponent from '../../components/projectDefinition/userProfile';

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    axios
      .put(`http://localhost:5000/researcher/updateResearcher/${this.props.login.id}`, {
        name: values.name,
        email: values.email,
        password: values.password
      })
      .then(() => {
        message.success('Successfully updated user');
      })
      .catch(() => {
        message.error('Ops... Server error, please contact the administrator');
      });
  }

  render() {
    return <UserProfileComponent handleSubmit={this.handleSubmit} />;
  }
}

const mapStateToProps = state => ({
  login: state.login
});

export default connect(mapStateToProps)(UserProfile);
