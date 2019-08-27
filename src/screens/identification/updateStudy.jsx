import React, { Component } from 'react';
import axios from 'axios';
import { Modal, Tabs} from 'antd';
import UpdateStudyComponent from '../../components/identification/updateStudy';
import CheckSimilarity from '../../screens/identification/checkSimilarity';

const { TabPane } = Tabs;

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
    if (this.props.studyUpdate !== '') {
      axios.get(`http://localhost:5000/study/specificStudy/${this.props.studyUpdate}`).then(res => {
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
        });
      });
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.studyUpdate !== this.props.studyUpdate && this.props.studyUpdate !== '') {
      this.getData();
    }
  }

  render() {
    return (
      <Modal visible={this.props.modalVisible} onCancel={this.props.handleCancel} footer={null} width={1100}>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Update Study" key="1">
            <UpdateStudyComponent
              {...this.state}
              handleOk={this.props.handleOk}
              handleCancel={this.props.handleCancel}
            />
          </TabPane>
          <TabPane tab="Check Similarity" key="2">
            <CheckSimilarity studyUpdate={this.props.studyUpdate}/>
          </TabPane>
        </Tabs>
      </Modal>
    );
  }
}

export default UpdateStudy;
