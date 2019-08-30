import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Button, message, Tabs } from 'antd';
import IdentificationResumeComponent from '../../components/identification/identificationResume';
import SpecificBasesComponent from '../../components/identification/specificBases';
import UpdateStudy from './updateStudy';

const { TabPane } = Tabs;

class SpecificBases extends Component {
  constructor() {
    super();
    this.state = {
      fileList: '',
      data: [],
      panes: [0],
      newTabIndex: 0,
      modalVisible: false,
      studyUpdate: '',
      activeKey: '0'
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleOk = this.handleOk.bind(this);
    //aaa
    this.addTab = this.addTab.bind(this);
    this.onChange = this.onChange.bind(this);
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

  addTab() {
    const len = this.state.newTabIndex + 1;
    const panes = this.state.panes;
    panes.push(len);
    this.setState({panes, newTabIndex: len });
  }

  onChange = activeKey => {
    this.setState({ activeKey });
  };

  onEdit = (targetKey, action) => {
    this[action](targetKey);
  };

  remove = targetKey => {
    let panes = this.state.panes;
    let temp = panes.indexOf(parseInt(targetKey));
    panes.splice(temp, 1)
    console.log(panes);
    this.setState({panes});
  }

  getData() {
    const id = this.props.project.id || 'f9fb7e03-e062-4aae-ad78-b1fb57a053a9'; //mudar
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
      modalVisible: false,
      studyUpdate: ''
    });
  }

  handleCancel() {
    this.setState({
      modalVisible: false,
      studyUpdate: ''
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
        <div style={{ marginBottom: 16 }}>
          <Button onClick={this.addTab}>ADD Search</Button>
        </div>
        <Tabs
          hideAdd
          onChange={this.onChange}
          activeKey={this.state.activeKey}
          type="editable-card"
          onEdit={this.onEdit}
        >
          {this.state.panes.map(pane => (
            <TabPane tab={`Search ${pane}`} key={pane}>
              <SpecificBasesComponent {...this.state} handleSubmit={this.handleSubmit} />
              <IdentificationResumeComponent {...this.state} handleEdit={this.handleEdit} />
              <UpdateStudy
                studyUpdate={this.state.studyUpdate}
                modalVisible={this.state.modalVisible}
                handleOk={this.handleOk}
                handleCancel={this.handleCancel}
              />
            </TabPane>
          ))}
        </Tabs>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  project: state.project
});

export default connect(mapStateToProps)(SpecificBases);
