import React, { Component } from 'react';
import axios from 'axios';
import UpdateStudyComponent from '../../components/identification/updateStudy';

class UpdateStudy extends Component {
  constructor() {
    super();
    this.state = {
      initialValues: {
        title: '',
        authors: '',
        citekey: '',
        keywords: '',
        venue: '',
        year: '',
        pages: '',
        volume: '',
        url: '',
        issn: '',
        doi: '',
        generalStatus: '',
        venueType: '',
        id: ''
      }
    };
    this.getData = this.getData.bind(this);
  }

  getData() {
    if(this.props.studyUpdate !== ''){
      axios
        .get(`http://localhost:5000/study/specificStudy/${this.props.studyUpdate}`)
        .then(res => {
          this.setState({
            initialValues: {
              title: res.data.title,
              authors: res.data.authors,
              citekey: res.data.citekey,
              keywords: res.data.keywords,
              venue: res.data.venue,
              year: res.data.year,
              pages: res.data.pages,
              volume: res.data.volume,
              url: res.data.url,
              issn: res.data.issn,
              doi: res.data.doi,
              generalStatus: res.data.generalStatus,
              venueType: res.data.venueType,
              id: res.data.id
            }
          })
        });
    }
  }

  render() {
    this.getData();
    return (
      <UpdateStudyComponent
        {...this.state}
        modalVisible={this.props.modalVisible}
        handleOk={this.props.handleOk}
        handleCancel={this.props.handleCancel}
      />
    );
  }
}

export default UpdateStudy;
