import React, { Component } from 'react';
import axios from 'axios';
import UpdateStudyComponent from '../../components/identification/updateStudy';

class UpdateStudy extends Component {
  constructor() {
    super();
    this.state = {
      initialValues : {}
    }
    this.getData = this.getData.bind(this);
  }

  componentDidMount(){
    this.getData();
  }

  getData(){
    axios.get(`http://localhost:5000/study/specificStudy/${this.props.studyUpdate}`).then(res =>{

    })
  }

  render() {
    
    return (
      <UpdateStudyComponent
        modalVisible={this.props.modalVisible}
        handleOk={this.props.handleOk}
        handleCancel={this.props.handleCancel}
      />
    );
  }
}

export default UpdateStudy;
