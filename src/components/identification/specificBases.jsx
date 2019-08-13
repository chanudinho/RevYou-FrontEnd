import React from 'react';
import { Collapse, Button, Row, Col, Input, Upload, Icon } from 'antd';

const Panel = Collapse.Panel;
const { TextArea } = Input;

const specificBases = ({ data, handleEdit, handleChange }) => {
  return (
    <Collapse defaultActiveKey={['1', '2']} marginBottom="20">
      <Panel
        marginBottom={20}
        showArrow={false}
        accordion={false}
        header={<h3>Adapt Standard Query</h3>}
        key="1"
      >
        <Row>
          <Col>
            <TextArea placeholder="Search String..." autosize={{ minRows: 2, maxRows: 6 }} />
          </Col>
        </Row>
      </Panel>
      <Panel
        marginBottom={20}
        showArrow={false}
        accordion={false}
        header={<h3>Import Studies</h3>}
        key="2"
      >
        <Row>
          <Col>
            <Upload
                customRequest={handleChange}
            >
              <Button>
                <Icon type="upload" /> Click to Upload
              </Button>
            </Upload>
          </Col>
        </Row>
      </Panel>
    </Collapse>
  );
};

export default specificBases;
