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
            <Menu.Item key="1"><Link to="/user/listprojects">Projects</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/user/userprofile">Profile</Link></Menu.Item>
          </SubMenu>
          <SubMenu key="Project" title={<span><Icon type="laptop" />Project</span>}>
            <Menu.Item key="5"><Link to="/project">Protocol</Link></Menu.Item>
            <Menu.Item key="6"><Link to="/project/inviteresearchers">Invite Researcher</Link></Menu.Item>
            <Menu.Item key="7"><Link to="/user/updateproject">Edit Basic Information</Link></Menu.Item>
            <Menu.Item key="8">option8</Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" title={<span><Icon type="notification" />Extraction</span>}>
            <Menu.Item key="9"><Link to="/extraction/step">Setting Step</Link></Menu.Item>
            <Menu.Item key="10"><Link to="/extraction/templateForm">Template Form</Link></Menu.Item>
            <Menu.Item key="11"><Link to="/extraction/Distribution">Distribution</Link></Menu.Item>
            <Menu.Item key="12">option12</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    );
  }
}

export default Sider;

