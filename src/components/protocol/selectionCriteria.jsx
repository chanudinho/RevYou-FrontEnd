import React from 'react';
import { Collapse, Table, Divider, Button, Input, Row, Col, Select } from 'antd';
import { Link } from 'react-router-dom';

const { Option } = Select;
const Panel = Collapse.Panel;

const typeAfter = (
    <Select defaultValue="inclusion">
      <Option value="inclusion">Inclusion</Option>
      <Option value="exclusion">Exclusion</Option>
    </Select>
);

const selectionCriteria = ({ data, handleDelete, handleEdit }) => {
  const columns = [
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      render: text => <Link to="/project/protocol">{text}</Link>
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type'
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
    <Collapse defaultActiveKey={['1']} marginBottom="20">
      <Panel
        marginBottom={20}
        showArrow={false}
        accordion={false}
        header={<h3>Selectinon Criteria</h3>}
        key="1"
      >
        <Row gutter={20} style={{ marginBottom: 20 }}>
          <Col span={12}>
            <Input addonAfter={typeAfter} placeholder="input the project you search..." />
          </Col>
          <Col span={1}>
            <Button type="primary">
              Add
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Table columns={columns} dataSource={data} rowKey={data => data.key} />
          </Col>
        </Row>
      </Panel>
    </Collapse>
  );
};

export default selectionCriteria;
