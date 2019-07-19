import React from 'react';
import { Collapse, Table, Divider, Button, Input, Row, Col } from 'antd';
import { Link } from 'react-router-dom';

const Panel = Collapse.Panel;
const Search = Input.Search;

const columns = [
  {
    title: 'Project Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <Link to="/project/inviteresearchers">{text}</Link>
  },
  {
    title: 'Cordinator',
    dataIndex: 'cordinator',
    key: 'cordinator'
  },
  {
    title: 'Action',
    key: 'action',
    render: () => (
      <span>
        <Button type="link" htmlType="submit" icon="edit" />
        <Divider type="vertical" />
        <Button type="link" htmlType="submit" icon="delete" />
      </span>
    )
  }
];

const listProject = ({data}) => {
  return (
    <Row>
      <Row gutter={20} style={{ marginBottom: 20 }}>
        <Col span={12}>
          <Search placeholder="input the project you search..." size="large" enterButton />
        </Col>
        <Col>
          <Button size="large" type="primary">
            Register
          </Button>
        </Col>
      </Row>

      <Row>
        <Collapse defaultActiveKey={['1', '2']} marginBottom="20">
          <Panel
            marginBottom={20}
            showArrow={false}
            accordion={false}
            header={<h3>Projects</h3>}
            key="1"
          >
            <Table columns={columns} dataSource={data} rowKey={data => data.key} />
          </Panel>
        </Collapse>
      </Row>
    </Row>
  );
};

export default listProject;
