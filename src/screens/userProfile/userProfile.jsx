import React, { Component } from 'react';
import axios from 'axios';
import UserProfileComponent from '../../components/projectDefinition/userProfile';

class UserProfile extends Component {
  handleChangePassword(values) {
    axios.put(``)
  }

  handleChangeEmail(values) {
    axios.put(``)
  }

  handleChangeName(values) {
    axios.put(``)
  }

  render() {
    return <UserProfileComponent />;
  }
}

export default UserProfile;
