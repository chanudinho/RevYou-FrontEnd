import React, { Component } from 'react';
import axios from 'axios';
import { message } from 'antd';
import SelectionCriteriaComponent from '../../components/protocol/selectionCriteria';

class SelectionCriteria extends Component {
  constructor() {
    super();
    this.state = {
      type: 'Inclusion',
      data: []
    };
    this.getData = this.getData.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  handleChange(type){
    this.setState({type});
  }

  handleSubmit(e) {
    const description = e.target.value || document.getElementById('description').value;
    axios.post(`http://localhost:5000/selectionCriteria/`, {
      description,
      type: this.state.type,
      ProjectId: this.props.project.id
    }).then(res =>{
      message.success('Selection Criteria was successfully registered');
      this.getData();
    }).catch(err => {
      message.error('Ops... Server error, please contact the administrator');
    })
  }

  handleDelete(id) {
    axios
      .delete(`http://localhost:5000/selectionCriteria/deleteCriteria/${id}`)
      .then(res => {
        this.getData();
      })
      .catch(error => {
        message.error('Ops... Server error, please contact the administrator');
      });
  }

  getData() {
    axios.get(`http://localhost:5000/selectionCriteria/${this.props.project.id}`).then(res => {
      let data = res.data.map(data => {
        return {
          description: data.description,
          type: data.type,
          key: data.id
        };
      });
      this.setState({ data });
    });
  }

  render() {
    return (
      <SelectionCriteriaComponent
        {...this.state}
        handleDelete={this.handleDelete}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
      />
    );
  }
}

export default SelectionCriteria;
