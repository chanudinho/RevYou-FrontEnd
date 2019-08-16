import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { message } from 'antd';
import IdentificationResumeComponent from '../../components/identification/identificationResume';
import SpecificBasesComponent from '../../components/identification/specificBases';
import UpdateStudy from './updateStudy';

class SpecificBases extends Component {
  constructor() {
    super();
    this.state = {
      fileList: '',
      data: [],
      modalVisible: false,
      studyUpdate: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleOk = this.handleOk.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  handleSubmit({ file }) {
    let formData = new FormData();
    formData.append('image', file);
    axios
      .post(`http://localhost:5000/study/${this.props.project.id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then(res => {
        this.setState({
          fileList: [
            {
              uid: '1',
              name: file.name,
              status: 'done'
            }
          ]
        });
        this.setState({ importedStudies: res.data });
      })
      .catch(error => {
        this.setState({
          fileList: [
            {
              uid: '1',
              name: file.name,
              status: 'error'
            }
          ]
        });
      });
  }

  getData() {
    const id = this.props.project.id || 'f9fb7e03-e062-4aae-ad78-b1fb57a053a9'
    axios.get(`http://localhost:5000/study/${id}`).then(res => {
      const data = res.data.map(data => {
        return {
          title: data.title,
          author: data.authors,
          year: data.year,
          status: data.generalStatus,
          key: data.id
        };
      });
      this.setState({ data });
    });
  }

  //modal
  handleOk() {
    this.setState({
      modalVisible: false
    });
  }

  handleCancel() {
    this.setState({
      modalVisible: false
    });
  }

  handleEdit(studyUpdate) {
    this.setState({
      modalVisible: true,
      studyUpdate
    });
  }

  render() {
    return (
      <div>
        <SpecificBasesComponent {...this.state} handleSubmit={this.handleSubmit} />
        <IdentificationResumeComponent {...this.state} handleEdit={this.handleEdit} />
        <UpdateStudy
          studyUpdate={this.state.studyUpdate}
          modalVisible={this.state.modalVisible}
          handleOk={this.handleOk}
          handleCancel={this.handleCancel}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  project: state.project
});

export default connect(mapStateToProps)(SpecificBases);
