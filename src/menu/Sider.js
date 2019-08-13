import React, {Component} from 'react';
import {
    Layout, Menu, Icon
  } from 'antd';
import { Link } from 'react-router-dom'



class Sider extends Component {


  render() {
    const { SubMenu } = Menu;
    const { Sider } = Layout;

    return (
      <Sider width={200} style={{ background: '#fff' }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
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
            <Menu.Item key="8"><Link to="/identification">Resume Search Sessions</Link></Menu.Item>
            <Menu.Item key="9"><Link to="/identification/ACM">ACM</Link></Menu.Item>
            <Menu.Item key="10"><Link to="/">IEEE</Link></Menu.Item>
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

export default Sider;

