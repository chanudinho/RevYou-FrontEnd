import React, {Component} from 'react';
import {
    Layout, Menu, Icon
  } from 'antd';
import { Link } from 'react-router-dom'
import {connect} from 'react-redux';


class Sider extends Component {
  constructor(props){
    super(props);
    this.state = {
      bases : []
    }    
  }

 async componentDidUpdate(prevProps) {
    if (prevProps.bases !== this.props.bases) {
      const bases = await this.props.bases.map(base => 
      (
        <Menu.Item key={base}>
          <Link to={`/identification/specificbase/${base}`}>
            {base}
          </Link>
        </Menu.Item>
      ));
      this.setState({bases})
    }
 }

  render() {
    const { SubMenu } = Menu;
    const { Sider } = Layout;

    return (
      <Sider width={200} style={{ background: '#fff' }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['User']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <SubMenu key="User" title={<span><Icon type="user" />User</span>}>
            <Menu.Item key="1"><Link to="/">Projects</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/userprofile">Profile</Link></Menu.Item>
          </SubMenu>
          <SubMenu key="Project" title={<span><Icon type="laptop" />Project</span>}>
            <Menu.Item key="5"><Link to="/project/protocol">Protocol</Link></Menu.Item>
            <Menu.Item key="6"><Link to="/project/inviteresearchers">Invite Researcher</Link></Menu.Item>
            <Menu.Item key="7"><Link to="/project">Edit Basic Information</Link></Menu.Item>
          </SubMenu>
          <SubMenu key="Identification" title={<span><Icon type="file-search" />Identification</span>}>
            <Menu.Item key="10"><Link to="/identification/setResearcherBase">Set Researchers</Link></Menu.Item>
            <Menu.Item key="8"><Link to="/identification">Resume Search Sessions</Link></Menu.Item>
            <Menu.Item key ="bbb"><Link to="/identification/studyManually">Add study manually</Link></Menu.Item>
            {this.state.bases}
            <Menu.Item key="9"><Link to="/identification/duplicates">Duplicate Studies</Link></Menu.Item>
            <Menu.Item key="aaaaaaaaa"><Link to="/identification/specificbase/ACM">ACM</Link></Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" title={<span><Icon type="notification" />Extraction</span>}>
            <Menu.Item key="21"><Link to="/extraction/step">Setting Step</Link></Menu.Item>
            <Menu.Item key="22"><Link to="/extraction/templateForm">Template Form</Link></Menu.Item>
            <Menu.Item key="23"><Link to="/extraction/Distribution">Distribution</Link></Menu.Item>
            <Menu.Item key="24">option12</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    );
  }
}

const mapStateToProps = state => ({
  bases: state.bases
});

export default connect(mapStateToProps)(Sider);

