import React from 'react';
import { Collapse, Table, Button, Row, Col, Input } from 'antd';
import { Link } from 'react-router-dom';

const Panel = Collapse.Panel;
const Search = Input.Search;

const identificationResume = ({ data, handleEdit }) => {
  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title'
    },
    {
      title: 'Author',
      dataIndex: 'author',
      key: 'author'
    },
    {
      title: 'Year',
      dataIndex: 'year',
      key: 'year'
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status'
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
              //href="/#/project/protocol"
              onClick={() => handleEdit(record.key)}
            />
          </span>
        );
      }
    }
  ];

  return (
    <Row>
      <Collapse defaultActiveKey={['1', '2']} marginBottom="20">
        <Panel
          marginBottom={20}
          showArrow={false}
          accordion={false}
          header={<h3>All Studies</h3>}
          key="1"
        >
          <Col span={12} style={{ marginBottom: 20 }}>
            <Search placeholder="input the study you search..." size="large" enterButton />
          </Col>
          <Col span={24}>
            <Table columns={columns} dataSource={data} rowKey={data => data.key} />
          </Col>
        </Panel>
      </Collapse>
    </Row>
  );
};

export default identificationResume;
