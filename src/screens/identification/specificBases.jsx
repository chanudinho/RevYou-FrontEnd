import React, { Component } from 'react';
import axios from 'axios';
import IdentificationResumeComponent from '../../components/identification/identificationResume';
import SpecificBasesComponent from '../../components/identification/specificBases';

class SpecificBases extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value){
    console.log("oi = ",value.file);
    let formData = new FormData();
    formData.append("image", value.file);
    axios.post('http://localhost:5000/study', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
    })
  }

  render() {
    return (
      <div>
        <SpecificBasesComponent handleChange={this.handleChange}/>
        <IdentificationResumeComponent />
      </div>
    );
  }
}

export default SpecificBases;
