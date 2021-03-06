import React from 'react';
import { Collapse, Table, Divider, Button, Input, Row, Col } from 'antd';
import { Link } from 'react-router-dom';

const Panel = Collapse.Panel;
const Search = Input.Search;

const listProject = ({ data, handleDelete, handleEdit }) => {
  const columns = [
    {
      title: 'Project Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <Link to="/project/protocol">{text}</Link>
    },
    {
      title: 'Cordinator',
      dataIndex: 'cordinator',
      key: 'cordinator'
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => {
        return (
          <span>
            <Button
              type="submit"
              htmlType="submit"
              icon="edit"
              href="/#/project/protocol"
              onClick={() => handleEdit(record.key)}
            />
            <Divider type="vertical" />
            <Button
              type="submit"
              htmlType="submit"
              icon="delete"
              onClick={() => handleDelete(record.key)}
            />
          </span>
        );
      }
    }
  ];

  return (
    <Row>
      <Row gutter={20} style={{ marginBottom: 20 }}>
        <Col span={12}>
          <Search placeholder="input the project you search..." size="large" enterButton />
        </Col>
        <Col span={1}>
          <Button size="large" type="primary" href="/#/user/newproject">
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
