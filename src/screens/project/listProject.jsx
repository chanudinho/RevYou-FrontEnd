import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux'
import { message } from 'antd';
import ProjectComponent from '../../components/projectDefinition/listProjects';
import {editProject} from '../../reducers/project/actions'

class Project extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.getData = this.getData.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  componentWillMount() {
    this.getData();
  }

  handleEdit(value){
    this.props.onEditProject(value);
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
    const email = this.props.login.email || 'chanudinho@hotmail.com';
    if(email){
      axios.get(`http://localhost:5000/researcher/myprojects/${email}`).then(res => {
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
  }

  render() {
    return <ProjectComponent {...this.state} handleDelete={this.handleDelete} handleEdit={this.handleEdit} />;
  }
}

//redux
const mapStateToProps = (state) => ({
  login: state.login,
  project: state.project
})

const mapDispatchToProps = (dispatch) => ({
  onEditProject: (id) => dispatch(editProject(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Project);
