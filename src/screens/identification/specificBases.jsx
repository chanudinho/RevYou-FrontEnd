import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Button, message, Tabs } from 'antd';
import IdentificationResumeComponent from '../../components/identification/identificationResume';
import AdaptedQueryAndImport from './adaptedQueryAndImport';
import UpdateStudy from './updateStudy';

const { TabPane } = Tabs;

class SpecificBases extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      panes: [0],
      newTabIndex: null,
      modalVisible: false,
      studyUpdate: '',
      activeKey: '0'
    };
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

  addTab() {
    const len = this.state.newTabIndex || this.state.panes.length;
    console.log('newtab', this.state.newTabIndex)
    const panes = this.state.panes;
    panes.splice(len,0,len);
    console.log(panes);
    this.setState({panes, newTabIndex: null});
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
    this.setState({panes, newTabIndex: parseInt(targetKey)});
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
    const baseName = this.props.match.params.name;
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
          {this.state.panes.map((pane, index) => (
            <TabPane tab={`Search ${pane}`} key={pane} closable={index === 0 ? false: true}>
              <AdaptedQueryAndImport projectId={this.props.project.id} baseName={baseName} search={this.state.activeKey}/>
              <IdentificationResumeComponent {...this.state} handleEdit={this.handleEdit} baseName={baseName}  />
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
